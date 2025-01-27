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

      res.status(201).json({ message: "Registration Successful" });
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
        throw { message: "User not found!" };
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
        },
      });

      res.status(200).send({ message: "Verification successful!" });
    } catch (err: any) {
      console.error(err);
      res.status(400).send({ message: err.message || "Internal server error" });
    }
  }

  //Tenant

  async registerTenant(req: Request, res: Response) {
    try {
      const { name, email, password, no_handphone, confirmPassword } = req.body;
      if (password != confirmPassword)
        throw { message: "Password Not Match !" };

      const tenant = await findTenant(name, email);
      if (tenant) throw { message: "Name or Email has been used" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newTenant = await prisma.tenant.create({
        data: {
          name,
          email,
          password: hashPassword,
          no_handphone,
        },
      });

      const payload = { id: newTenant.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const linkTenant = `${base_url_fe}/verifytenant/${token}`;

      const templatePath = path.join(
        __dirname,
        "../../../templates",
        "verifyTenant.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ name, linkTenant });

      await transporter.sendMail({
        from: "wafifaisal19@gmail.com",
        to: email,
        subject: "Welcome To NGINEPIN",
        html,
      });

      res.status(201).json({ massage: "Registration Succes" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ massage: "Registration Failed" });
    }
  }

  async loginTenant(req: Request, res: Response): Promise<void> {
    try {
      const { data, password } = req.body;

      if (!data || !password) {
        res
          .status(400)
          .send({ success: false, message: "Data and password are required!" });
        return;
      }

      // Find promotor by name or email
      const tenant = await prisma.tenant.findFirst({
        where: {
          OR: [{ name: data }, { email: data }],
        },
      });

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
      const verifiedTenant: any = verify(token, process.env.JWT_KEY!);
      await prisma.tenant.update({
        data: { isVerify: true },
        where: { id: verifiedTenant.id },
      });
      res.status(200).send({ message: "Verify Successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  //Session
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
          image: user.avatar,
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

  async socialLogin(req: Request, res: Response) {
    try {
      const { tokenId } = req.body;

      if (!tokenId) {
        throw { message: "Token ID is required" };
      }

      let email: string | undefined;
      let name: string | undefined;
      let externalId: string | undefined;

      const googleTicket = await googleClient.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const googlePayload = googleTicket.getPayload();
      if (!googlePayload) throw { message: "Invalid Google token" };

      email = googlePayload.email;
      name = googlePayload.name;
      externalId = googlePayload.sub;

      if (!email) {
        throw { message: "Unable to retrieve email from Google token" };
      }

      // Cek apakah user sudah ada
      let user = await prisma.user.findUnique({ where: { email } });

      let message: string;

      if (!user) {
        user = await prisma.user.create({
          data: {
            username: name || "",
            no_handphone: "",
            email,
            googleId: externalId,
            isVerify: true,
          },
        });
        message = "User successfully registered and logged in";
      } else {
        message = "User already registered and logged in";
      }

      // Buat token JWT
      const jwtPayload = { id: user.id, type: "user" };
      const token = sign(jwtPayload, process.env.JWT_KEY!, { expiresIn: "1d" });

      res.status(200).send({
        message,
        token,
        user: { id: user.id, email: user.email, username: user.username },
      });
    } catch (err: any) {
      console.error(err);
      res.status(400).send({ message: err.message || "Login failed" });
    }
  }
}
