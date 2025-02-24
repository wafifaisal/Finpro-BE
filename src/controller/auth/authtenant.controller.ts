import { Request, Response } from "express";
import { compare } from "bcrypt";
import { verify } from "jsonwebtoken";
import prisma from "../../prisma";
import {
  generateToken,
  hashPassword,
  sendEmail,
  base_url_fe,
  googleClient,
} from "../../utils/AuthHelpers";
import { findTenant } from "../../services/tenant.service";

export class AuthTenantController {
  async registerTenant(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      if (!email) throw new Error("Email is required");
      const exists = await prisma.tenant.findUnique({ where: { email } });
      if (exists) throw new Error("Email has already been used");
      const newTenant = await prisma.tenant.create({
        data: { name: "", no_handphone: null, email },

      });
      const token = generateToken({ id: newTenant.id });
      const link = `${base_url_fe}/auth/tenant/verify-tenant/${token}`;
      await sendEmail(
        "verifyTenant.hbs",
        { linkTenant: link },
        email,
        "Selamat Datang di NGINEPIN, Verifikasi Tenant"
      );
      res.status(201).json({ message: "Registrasi Berhasil!, Cek Email kamu" });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  }

  async loginTenant(req: Request, res: Response): Promise<void> {
    try {
      const { data, password } = req.body;
      if (!data || !password) {
        res.status(400).send({ message: "Data and password are required!" });
        return;
      }
      const tenant = await findTenant(data, data);
      if (!tenant) {
        res.status(404).send({ message: "Tenant not found!" });
        return;
      }
      if (!tenant.isVerify) {
        res.status(403).send({ message: "Tenant is not verified!" });
        return;
      }
      if (!(await compare(password, tenant.password!))) {
        res.status(401).send({ message: "Password Salah" });
        return;
      }
      const token = generateToken({ id: tenant.id, type: "tenant" });
      res.status(200).json({ message: "Login successful!", token });
    } catch (err: any) {
      res.status(500).send({ message: "An unexpected error occurred." });
    }
  }

  async verifyTenant(req: Request, res: Response): Promise<void> {
    try {
      const { token } = req.params;
      const { name, password, confirmPassword, no_handphone } = req.body;
      if (!password || password !== confirmPassword)
        throw new Error("Passwords do not match!");
      if (await prisma.tenant.findUnique({ where: { no_handphone } }))
        throw new Error("Phone number has already been used!");
      const decoded = verify(token, process.env.JWT_KEY!) as { id: string };
      if (!decoded?.id) throw new Error("Invalid or expired token!");
      const tenant = await prisma.tenant.findUnique({
        where: { id: decoded.id },
      });
      if (!tenant) throw new Error("Tenant not found!");
      if (tenant.isVerify) throw new Error("Tenant already verified!");
      const hashed = await hashPassword(password);
      await prisma.tenant.update({
        where: { id: tenant.id },
        data: { name, password: hashed, isVerify: true, no_handphone },
      });
      res.status(200).send({ message: "Verification successful!" });
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async socialLoginTenant(req: Request, res: Response): Promise<void> {
    try {
      const { tokenId } = req.body;
      if (!tokenId) throw new Error("Token ID is required");
      const ticket = await googleClient.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      if (!payload || !payload.email) throw new Error("Invalid Google token");
      let tenant = await prisma.tenant.findUnique({
        where: { email: payload.email },
      });
      let message: string;
      if (!tenant) {
        tenant = await prisma.tenant.create({
          data: {
            name: payload.name || "",
            no_handphone: null,

            email: payload.email,
            googleId: payload.sub,
            avatar: payload.picture,
            isVerify: true,
          },
        });
        message = "User successfully registered and logged in";
      } else if (!tenant.googleId) {
        throw new Error("User is already registered");
      } else {
        message = "User already registered and logged in";
      }
      const token = generateToken({ id: tenant.id, type: "tenant" });
      res.status(200).send({
        message,
        token,
        user: {
          id: tenant.id,
          email: tenant.email,
          name: tenant.name,
          avatar: tenant.avatar,
        },
      });
    } catch (err: any) {
      res.status(400).send({ message: err.message || "Login failed" });
    }
  }

  async forgotPasswordTenant(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      const tenant = await prisma.tenant.findUnique({ where: { email } });
      if (!tenant) {
        res.status(404).send({ message: "Email not found!" });
        return;
      }
      const token = generateToken({ id: tenant.id, email: tenant.email }, "1h");
      const resetLink = `${base_url_fe}/auth/tenant/login/reset-password/${token}`;
      await sendEmail(
        "forgotPassword.hbs",
        { name: tenant.name, resetLink },
        email,
        "Password Reset Request"
      );
      res
        .status(200)
        .send({ message: "Password reset link sent to your email!" });
    } catch (err) {
      res
        .status(500)
        .send({ message: "An error occurred while sending the reset link." });
    }
  }

  async resetPasswordTenant(req: Request, res: Response): Promise<void> {
    try {
      const { token, newPassword, confirmPassword } = req.body;
      if (!token) {
        res.status(400).send({ message: "Token is required!" });
        return;
      }
      if (newPassword !== confirmPassword) {
        res.status(400).send({ message: "Passwords do not match!" });
        return;
      }
      let decoded: any;
      try {
        decoded = verify(token, process.env.JWT_KEY!);
      } catch (e) {
        res.status(400).send({ message: "Invalid or expired token!" });
        return;
      }
      const tenant = await prisma.tenant.findUnique({
        where: { id: decoded.id },
      });
      if (!tenant) {
        res.status(404).send({ message: "Tenant not found!" });
        return;
      }
      const hashed = await hashPassword(newPassword);
      await prisma.tenant.update({
        where: { id: tenant.id },
        data: { password: hashed },
      });
      res
        .status(200)
        .send({ message: "Password has been reset successfully!" });
    } catch (err) {
      res.status(500).send({ message: "An internal server error occurred!" });
    }
  }
}
