import { Request, Response } from "express";
import { genSalt, hash, compare } from "bcrypt";
import prisma from "../../../prisma";
import { sign, verify } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import { findTenant } from "../../../services/tenant.service";
import handlebars from "handlebars";
import { transporter } from "../../../services/mailer";
import { findUser } from "../../../services/user.service";
import { OAuth2Client } from "google-auth-library";

const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;
const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export class AuthController {
  async loginUser(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      const user = await findUser(data, data);

      if (!user) throw { message: "User not found!" };
      if (!user.isVerify) throw { message: "User not verified!" };

      const isValidPass = await compare(password, user.password!);
      if (!isValidPass) throw { message: "Incorrect password!" };

      const payload = { id: user.id, type: "user" };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      console.log("Generated Token:", token);
      console.log("Token Payload:", payload);

      res.status(200).send({
        message: "Login successful",
        token,
      });
    } catch (err) {
      console.error(err);
      res.status(400).send({
        message: "Login failed",
      });
    }
  }

  async registerUser(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email) {
        throw new Error("Email is required");
      }

      const user = await prisma.user.findUnique({
        where: { email },
      });
      if (user) {
        throw { message: "Email has already been used" };
      }

      const newUserData: any = {
        username: "",
        no_handphone: "",
        email,
      };

      const newUser = await prisma.user.create({ data: newUserData });
      const payload = { id: newUser.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const linkUser = `${base_url_fe}/auth/user/verifyUser/${token}`;

      const templatePath = path.join(
        __dirname,
        "../../../templates",
        "verifyUser.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({
        linkUser,
      });

      // Mailer transport
      await transporter.sendMail({
        from: "wafifaisal19@gmail.com",
        to: email,
        subject: "Welcome To NGINEPIN",
        html,
      });

      res.status(201).json({ message: "Registrasi Berhasil, Cek Email anda" });
    } catch (err: any) {
      console.error(err);
      res.status(400).json({ message: "Internal server error" });
    }
  }

  async verifyUser(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const { username, password, confirmPassword, no_handphone } = req.body;

      // Validasi password
      if (!password || !confirmPassword || password !== confirmPassword) {
        throw { message: "Passwords do not match!" };
      }

      const phoneExists = await prisma.user.findUnique({
        where: { no_handphone },
      });
      if (phoneExists) {
        throw { message: "Phone number has already been used!" };
      }

      // Verifikasi token JWT
      const decoded = verify(token, process.env.JWT_KEY!) as { id: string };

      if (!decoded || !decoded.id) {
        throw { message: "Invalid or expired token!" };
      }

      const userId = decoded.id;

      // Cek apakah user sudah diverifikasi
      const existingUser = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!existingUser) {
        throw { message: "User tidak detemukan!" };
      }

      if (existingUser.isVerify) {
        throw { message: "User already verified!" };
      }

      // Hash password
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);

      // Update user data
      await prisma.user.update({
        where: { id: userId },
        data: {
          username,
          password: hashedPassword,
          isVerify: true,
          no_handphone,
        },
      });

      res.status(200).send({ message: "Akun berhasil diverifikasi!" });
    } catch (err: any) {
      console.error(err);
      res.status(400).send({ message: err.message || "Internal server error" });
    }
  }

  async socialLogin(req: Request, res: Response) {
    try {
      const { tokenId } = req.body;

      if (!tokenId) {
        throw { message: "Token ID is required" };
      }

      const googleTicket = await googleClient.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const googlePayload = googleTicket.getPayload();
      if (!googlePayload) throw { message: "Invalid Google token" };

      const email = googlePayload.email;
      const name = googlePayload.name;
      const externalId = googlePayload.sub;
      const avatar = googlePayload.picture;

      if (!email) {
        throw { message: "Unable to retrieve email from Google token" };
      }

      // Cari user berdasarkan email
      let user = await prisma.user.findUnique({ where: { email } });
      let message: string;

      if (!user) {
        // Jika user tidak ada, maka buat user baru dengan data dari Google
        user = await prisma.user.create({
          data: {
            username: name || "",
            no_handphone: "",
            email,
            googleId: externalId,
            avatar,
            isVerify: true,
          },
        });
        message = "User successfully registered and logged in";
      } else {
        if (!user.googleId) {
          throw { message: "User is already registered" };
        }
        message = "User already registered and logged in";
      }

      // Buat token JWT untuk sesi login
      const jwtPayload = { id: user.id, type: "user" };
      const token = sign(jwtPayload, process.env.JWT_KEY!, { expiresIn: "1d" });

      res.status(200).send({
        message,
        token,
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          avatar: user.avatar,
          no_telp: user.no_handphone,
        },
      });
    } catch (err: any) {
      console.error(err);
      res.status(400).send({ message: err.message || "Login failed" });
    }
  }

  async forgotPasswordUser(req: Request, res: Response) {
    try {
      const { email } = req.body;

      // Check if the email exists in the database
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        res.status(404).send({ message: "Email not found!" });
        return;
      }

      // Generate a password reset token
      const payload = { id: user.id, email: user.email };
      const resetToken = sign(payload, process.env.JWT_KEY!, {
        expiresIn: "1h", // Token valid for 1 hour
      });

      // Create the password reset link
      const resetLink = `${base_url_fe}/auth/user/login/reset-password/${resetToken}`;

      // Prepare the email template
      const templatePath = path.join(
        __dirname,
        "../../../templates",
        "forgotPassword.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ username: user.username, resetLink });

      // Send the email
      await transporter.sendMail({
        from: "wafifaisal19@gmail.com",
        to: email,
        subject: "Password Reset Request",
        html,
      });

      res
        .status(200)
        .send({ message: "Password reset link sent to your email!" });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send({ message: "An error occurred while sending the reset link." });
    }
  }

  async resetPasswordUser(req: Request, res: Response) {
    try {
      const { token, newPassword, confirmPassword } = req.body;

      console.log("Request body:", req.body);

      if (!token) {
        res.status(400).send({ message: "Token is required!" });
        return;
      }

      if (newPassword !== confirmPassword) {
        res.status(400).send({ message: "Passwords do not match!" });
        return;
      }

      // Verify the reset token
      let decoded: any;
      try {
        decoded = verify(token, process.env.JWT_KEY!);
      } catch (err) {
        console.error("Token verification failed:", err);
        res.status(400).send({ message: "Invalid or expired token!" });
        return;
      }

      console.log("Token decoded:", decoded);

      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
      });

      if (!user) {
        res.status(404).send({ message: "User not found!" });
        return;
      }

      // Hash the new password
      const salt = await genSalt(10);
      const hashedPassword = await hash(newPassword, salt);

      // Update the user's password
      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      });

      res
        .status(200)
        .send({ message: "Password has been reset successfully!" });
    } catch (err) {
      console.error("Error resetting password:", err);
      res.status(500).send({ message: "An internal server error occurred!" });
    }
  }

  //SESSION////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async getSession(req: Request, res: Response): Promise<void> {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).send({ message: "Unauthorized: No token provided" });
        return;
      }

      const token = authHeader.split(" ")[1];
      if (!token) {
        res.status(401).send({ message: "Unauthorized: Token missing" });
        return;
      }

      // Verify token
      const decoded = verify(token, process.env.JWT_KEY!) as {
        id: string;
        type: string;
      };

      if (!decoded || !decoded.type) {
        res.status(403).send({ message: "Forbidden: Invalid token" });
        return;
      }

      // Handle different user types
      if (decoded.type === "tenant") {
        const tenant = await prisma.tenant.findUnique({
          where: { id: decoded.id },
        });

        if (!tenant) {
          res.status(404).send({ message: "Tenant not found" });
          return;
        }

        res.status(200).send({
          id: tenant.id,
          type: "tenant",
          name: tenant.name,
          email: tenant.email,
          avatar: tenant.avatar || null,
        });
      } else if (decoded.type === "user") {
        const user = await prisma.user.findUnique({
          where: { id: decoded.id },
          select: {
            id: true,
            username: true,
            email: true,
            avatar: true,
            createdAt: true,
            updatedAt: true,
            isVerify: true,
            googleId: true,
          },
        });

        if (!user) {
          res.status(404).send({ message: "User not found" });
          return;
        }

        res.status(200).json({
          id: user.id,
          type: "user",
          username: user.username,
          email: user.email,
          avatar: user.avatar,
          isVerify: user.isVerify,
          googleId: user.googleId,
        });
      } else {
        res.status(403).json({ message: "Forbidden: Unknown token type" });
      }
    } catch (err) {
      console.error("Error fetching session:");
      res
        .status(401)
        .send({ message: "Unauthorized: Invalid or expired token" });
    }
  }

  //TENANT//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  async registerTenant(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email) {
        throw new Error("Email is required");
      }
      const tenant = await prisma.tenant.findUnique({
        where: { email },
      });
      if (tenant) {
        throw { message: "Email has already been used" };
      }
      const newTenantData: any = {
        name: "",
        no_handphone: "",
        email,
      };

      const newTenant = await prisma.tenant.create({ data: newTenantData });
      const payload = { id: newTenant.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const linkTenant = `${base_url_fe}/auth/tenant/verify-tenant/${token}`;

      const templatePath = path.join(
        __dirname,
        "../../../templates",
        "verifyTenant.hbs"
      );

      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({
        linkTenant,
      });

      // Mailer transport
      await transporter.sendMail({
        from: "wafifaisal19@gmail.com",
        to: email,
        subject: "Selamat Datang di NGINEPIN, Verifikasi Tenant",
        html,
      });
      res.status(201).json({ message: "Registrasi Berhasil!, Cek Email kamu" });
    } catch (err: any) {
      console.error(err);
      res.status(400).json({ message: "Email sudah terdaftar" });
    }
  }

  async loginTenant(req: Request, res: Response): Promise<void> {
    try {
      const { data, password } = req.body;
      const tenant = await findTenant(data, data);

      if (!data || !password) {
        res
          .status(400)
          .send({ success: false, message: "Data and password are required!" });
        return;
      }

      if (!tenant) {
        res.status(404).send({ success: false, message: "Tenant not found!" });
        return;
      }

      if (!tenant.isVerify) {
        res
          .status(403)
          .send({ success: false, message: "Tenant is not verified!" });
        return;
      }

      const isValidPass = await compare(password, tenant.password!);
      if (!isValidPass) {
        res
          .status(401)
          .send({ success: false, message: "Incorrect password!" });
        return;
      }

      const payload = { id: tenant.id, type: "tenant" }; // ada tipecdcd
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

      res.status(200).json({
        success: true,
        message: "Login successful!",
        token,
      });
    } catch (err: any) {
      console.error("Error during tenant login:", {
        error: err.message,
        data: req.body.data,
      });
      res.status(500).send({
        success: false,
        message: "An unexpected error occurred.",
      });
    }
  }

  async verifyTenant(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const { name, password, confirmPassword, no_handphone } = req.body;

      // Validasi password
      if (!password || !confirmPassword || password !== confirmPassword) {
        throw { message: "Passwords do not match!" };
      }

      const phoneExists = await prisma.tenant.findUnique({
        where: { no_handphone },
      });
      if (phoneExists) {
        throw { message: "Phone number has already been used!" };
      }

      // Verifikasi token JWT
      const decoded = verify(token, process.env.JWT_KEY!) as { id: string };

      if (!decoded || !decoded.id) {
        throw { message: "Invalid or expired token!" };
      }

      const tenantId = decoded.id;

      // Cek apakah user sudah diverifikasi
      const existingTenant = await prisma.tenant.findUnique({
        where: { id: tenantId },
      });

      if (!existingTenant) {
        throw { message: "Tenant not found!" };
      }

      if (existingTenant.isVerify) {
        throw { message: "Tenant already verified!" };
      }

      // Hash password
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);

      // Update user data
      await prisma.tenant.update({
        where: { id: tenantId },
        data: {
          name,
          password: hashedPassword,
          isVerify: true,
          no_handphone,
        },
      });

      res.status(200).send({ message: "Verification successful!" });
    } catch (err: any) {
      console.error(err);
      res.status(400).send({ message: err.message || "Internal server error" });
    }
  }

  async socialLoginTenant(req: Request, res: Response) {
    try {
      const { tokenId } = req.body;

      if (!tokenId) {
        throw { message: "Token ID is required" };
      }

      const googleTicket = await googleClient.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const googlePayload = googleTicket.getPayload();
      if (!googlePayload) throw { message: "Invalid Google token" };

      const email = googlePayload.email;
      const name = googlePayload.name;
      const externalId = googlePayload.sub;
      const avatar = googlePayload.picture;

      if (!email) {
        throw { message: "Unable to retrieve email from Google token" };
      }

      let tenant = await prisma.tenant.findUnique({ where: { email } });
      let message: string;

      if (!tenant) {
        tenant = await prisma.tenant.create({
          data: {
            name: name || "",
            no_handphone: "",
            email,
            googleId: externalId,
            avatar,
            isVerify: true,
          },
        });
        message = "User successfully registered and logged in";
      } else {
        if (!tenant.googleId) {
          throw { message: "User is already registered" };
        }
        message = "User already registered and logged in";
      }

      const jwtPayload = { id: tenant.id, type: "tenant" };
      const token = sign(jwtPayload, process.env.JWT_KEY!, { expiresIn: "1d" });

      res.status(200).send({
        message,
        token,
        user: {
          id: tenant.id,
          email: tenant.email,
          name: tenant.name,
          avatar: tenant.avatar,
          no_telp: tenant.no_handphone,
        },
      });
    } catch (err: any) {
      console.error(err);
      res.status(400).send({ message: err.message || "Login failed" });
    }
  }

  async forgotPasswordTenant(req: Request, res: Response) {
    try {
      const { email } = req.body;

      // Check if the email exists in the database
      const tenant = await prisma.tenant.findUnique({
        where: { email },
      });

      if (!tenant) {
        res.status(404).send({ message: "Email not found!" });
        return;
      }

      // Generate a password reset token
      const payload = { id: tenant.id, email: tenant.email };
      const resetToken = sign(payload, process.env.JWT_KEY!, {
        expiresIn: "1h", // Token valid for 1 hour
      });

      // Create the password reset link
      const resetLink = `${base_url_fe}/auth/tenant/login/reset-password/${resetToken}`;

      // Prepare the email template
      const templatePath = path.join(
        __dirname,
        "../../../templates",
        "forgotPassword.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ name: tenant.name, resetLink });

      // Send the email
      await transporter.sendMail({
        from: "wafifaisal19@gmail.com",
        to: email,
        subject: "Password Reset Request",
        html,
      });

      res
        .status(200)
        .send({ message: "Password reset link sent to your email!" });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .send({ message: "An error occurred while sending the reset link." });
    }
  }

  async resetPasswordTenant(req: Request, res: Response) {
    try {
      const { token, newPassword, confirmPassword } = req.body;

      console.log("Request body:", req.body);

      if (!token) {
        res.status(400).send({ message: "Token is required!" });
        return;
      }

      if (newPassword !== confirmPassword) {
        res.status(400).send({ message: "Passwords do not match!" });
        return;
      }

      // Verify the reset token
      let decoded: any;
      try {
        decoded = verify(token, process.env.JWT_KEY!);
      } catch (err) {
        console.error("Token verification failed:", err);
        res.status(400).send({ message: "Invalid or expired token!" });
        return;
      }

      console.log("Token decoded:", decoded);

      const tenant = await prisma.tenant.findUnique({
        where: { id: decoded.id },
      });

      if (!tenant) {
        res.status(404).send({ message: "Tenant not found!" });
        return;
      }

      // Hash the new password
      const salt = await genSalt(10);
      const hashedPassword = await hash(newPassword, salt);

      await prisma.tenant.update({
        where: { id: tenant.id },
        data: { password: hashedPassword },
      });

      res
        .status(200)
        .send({ message: "Password has been reset successfully!" });
    } catch (err) {
      console.error("Error resetting password:", err);
      res.status(500).send({ message: "An internal server error occurred!" });
    }
  }
}
