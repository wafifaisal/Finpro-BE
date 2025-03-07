import { Request, Response } from "express";
import { compare } from "bcrypt";
import { verify } from "jsonwebtoken";
import prisma from "../../prisma";
import {
  generateToken,
  googleClient,
  hashPassword,
  sendEmail,
} from "../../utils/AuthHelpers";
import { findUser } from "../../services/user.service";

const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;

export class AuthUserController {
  async loginUser(req: Request, res: Response): Promise<void> {
    try {
      const { data, password } = req.body;
      const user = await findUser(data, data);
      if (!user) throw new Error("User not found!");
      if (!user.isVerify) throw new Error("User not verified!");
      if (!(await compare(password, user.password!)))
        throw new Error("Password Salah");
      const token = generateToken({ id: user.id, type: "user" });
      res.status(200).send({ message: "Login successful", token });
    } catch (err: any) {
      res.status(400).send({ message: "Login failed", error: err.message });
    }
  }

  async registerUser(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      if (!email) throw new Error("Email is required");
      const exists = await prisma.user.findUnique({ where: { email } });
      if (exists) throw new Error("Email has already been used");
      const newUser = await prisma.user.create({
        data: { username: "", no_handphone: null, email },
      });
      const token = generateToken({ id: newUser.id });
      const link = `${base_url_fe}/auth/user/verifyUser/${token}`;
      await sendEmail(
        "verifyUser.hbs",
        { linkUser: link },
        email,
        "Welcome To NGINEPIN"
      );
      res.status(201).json({ message: "Registrasi Berhasil, Cek Email anda" });
    } catch (err: any) {
      res
        .status(400)
        .json({ message: "Internal server error", error: err.message });
    }
  }

  async verifyUser(req: Request, res: Response): Promise<void> {
    try {
      const { token } = req.params;
      const { username, password, confirmPassword, no_handphone } = req.body;
      if (!password || password !== confirmPassword)
        throw new Error("Passwords do not match!");
      if (await prisma.user.findUnique({ where: { no_handphone } }))
        throw new Error("Phone number has already been used!");
      const decoded = verify(token, process.env.JWT_KEY!) as { id: string };
      if (!decoded?.id) throw new Error("Invalid or expired token!");
      const user = await prisma.user.findUnique({ where: { id: decoded.id } });
      if (!user) throw new Error("User not found!");
      if (user.isVerify) throw new Error("User already verified!");
      const hashed = await hashPassword(password);
      await prisma.user.update({
        where: { id: decoded.id },
        data: { username, password: hashed, isVerify: true, no_handphone },
      });
      res.status(200).send({ message: "Akun berhasil diverifikasi!" });
    } catch (err: any) {
      res.status(400).send({ message: err.message });
    }
  }

  async socialLogin(req: Request, res: Response): Promise<void> {
    try {
      const { tokenId } = req.body;
      if (!tokenId) throw new Error("Token ID is required");
      const ticket = await googleClient.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();
      if (!payload || !payload.email) throw new Error("Invalid Google token");
      let user = await prisma.user.findUnique({
        where: { email: payload.email },
      });
      let message: string;
      if (!user) {
        user = await prisma.user.create({
          data: {
            username: payload.name || "",
            no_handphone: null,

            email: payload.email,
            googleId: payload.sub,
            avatar: payload.picture,
            isVerify: true,
          },
        });
        message = "User successfully registered and logged in";
      } else if (!user.googleId) {
        throw new Error("User is already registered");
      } else {
        message = "User already registered and logged in";
      }
      const token = generateToken({ id: user.id, type: "user" });
      res.status(200).send({
        message,
        token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
        },
      });
    } catch (err: any) {
      res.status(400).send({ message: err.message || "Login failed" });
    }
  }

  async forgotPasswordUser(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body;
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        res.status(404).send({ message: "Email not found!" });
        return;
      }
      const token = generateToken(
        {
          id: user.id,
          email: user.email,
          version: user.resetPasswordTokenVersion || 0,
        },
        "1h"
      );
      const resetLink = `${base_url_fe}/auth/user/login/reset-password/${token}`;
      await sendEmail(
        "forgotPassword.hbs",
        { username: user.username, resetLink },
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
  async resetPasswordUser(req: Request, res: Response): Promise<void> {
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
      const user = await prisma.user.findUnique({ where: { id: decoded.id } });
      if (!user) {
        res.status(404).send({ message: "User not found!" });
        return;
      }
      const tokenVersion = decoded.version;
      if (tokenVersion !== (user.resetPasswordTokenVersion || 0)) {
        res.status(400).send({ message: "Reset link has already been used!" });
        return;
      }
      const hashed = await hashPassword(newPassword);
      await prisma.user.update({
        where: { id: user.id },
        data: {
          password: hashed,
          resetPasswordTokenVersion: (user.resetPasswordTokenVersion || 0) + 1,
        },
      });
      res
        .status(200)
        .send({ message: "Password has been reset successfully!" });
    } catch (err) {
      res.status(500).send({ message: "An internal server error occurred!" });
    }
  }
}
