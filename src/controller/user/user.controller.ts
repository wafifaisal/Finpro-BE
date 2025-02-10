import { Prisma } from "../../../prisma/generated/client";
import { Request, Response } from "express";
import prisma from "../../prisma";
import { cloudinaryUpload } from "../../services/cloudinary";
import { sign, verify } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { transporter } from "../../services/mailer";
import bcrypt from "bcrypt";

const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;

export class UserController {
  async getUser(req: Request, res: Response) {
    try {
      console.log(req.user);
      const { search, page = 1 } = req.query;
      const limit = 10;
      const filter: Prisma.UserWhereInput = {};

      if (search) {
        filter.OR = [
          { username: { contains: search as string, mode: "insensitive" } },
          { email: { contains: search as string, mode: "insensitive" } },
        ];
      }

      const countUser = await prisma.user.aggregate({
        _count: { _all: true },
      });
      const total_page = Math.ceil(countUser._count._all / +limit);
      const users = await prisma.user.findMany({
        where: filter,
        orderBy: { createdAt: "asc" },
        take: limit,
        skip: limit * (+page - 1),
      });

      res.status(200).send({ total_page, page, users });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      console.log("User ID from Request:", userId);

      if (!userId) {
        res.status(400).json({ message: "User ID is missing" });
        return;
      }

      const user = await prisma.user.findUnique({
        where: { id: userId },
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
        res.status(404).json({ message: "User not found" });
        return;
      }

      res.status(200).json(user);
    } catch (err) {
      console.error("Error fetching user profile:", err);
      res.status(500).json({ message: "Internal server error", error: err });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.user.delete({ where: { id } });
      res.status(200).send("User Deleted");
    } catch (err) {
      console.error("Error deleting user:", err);
      res.status(400).send(err);
    }
  }

  async editAvatarUser(req: Request, res: Response) {
    try {
      if (!req.file) throw { message: "File is empty" };

      const { secure_url } = await cloudinaryUpload(req.file, "avatar");

      await prisma.user.update({
        data: { avatar: secure_url },
        where: { id: req.user?.id },
      });

      res.status(200).send({ message: "Avatar edited!" });
    } catch (err) {
      console.error("Error editing avatar:", err);
      res.status(400).send(err);
    }
  }

  async updateEmail(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      const { email } = req.body;

      // Ambil data pengguna saat ini
      const currentUser = await prisma.user.findUnique({
        where: { id: userId },
        select: { email: true },
      });

      if (!currentUser) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      // Cek apakah email baru sama dengan email saat ini
      if (currentUser.email === email) {
        res.status(400).json({
          message: "New email cannot be the same as the current email",
        });
        return;
      }

      // Buat token dengan payload yang menyimpan id user dan email baru
      const payload = { id: userId, newEmail: email };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const linkUser = `${base_url_fe}/profile/${token}`;

      // Load dan compile template email menggunakan Handlebars
      const templatePath = path.join(
        __dirname,
        "../../../templates",
        "verifyEmail.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ linkUser });

      // Kirim email verifikasi ke email baru
      await transporter.sendMail({
        from: "wafifaisal19@gmail.com",
        to: email,
        subject: "Verify Your New Email - NGINEPIN",
        html,
      });

      res.status(200).json({
        message:
          "Verification email sent successfully. Please check your inbox to verify your new email.",
      });
    } catch (err) {
      console.error("Error updating email:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async verifyEmail(req: Request, res: Response) {
    try {
      const { token } = req.params;

      // Verifikasi token dan ekstrak payload
      const decoded = verify(token, process.env.JWT_KEY!) as {
        id: string;
        newEmail: string;
      };

      // Update data email di database dengan email baru dari token
      await prisma.user.update({
        where: { id: decoded.id },
        data: { email: decoded.newEmail },
      });

      res
        .status(200)
        .json({ message: "Email verified and updated successfully!" });
    } catch (err) {
      console.error("Error verifying email:", err);
      res.status(500).json({ message: "Invalid or expired token" });
    }
  }

  updatePassword = async (req: Request, res: Response) => {
    try {
      const userId = req.user?.id; // ID pengguna dari token autentikasi
      const { currentPassword, newPassword } = req.body;

      // Cek apakah pengguna ada di database
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { password: true }, // Ambil hash password lama
      });

      if (!user) {
        throw { message: "User not found" };
      }

      // Pastikan password di database bukan null sebelum dibandingkan
      if (!user.password) {
        throw { message: "User password is not available" };
      }

      // Bandingkan currentPassword dengan password di database
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        throw { message: "Current password is incorrect" };
      }

      // Cegah pengguna menggunakan password yang sama
      const isSamePassword = await bcrypt.compare(newPassword, user.password);
      if (isSamePassword) {
        throw {
          message: "New password cannot be the same as the current password",
        };
      }

      // Hash password baru sebelum menyimpannya
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update password di database
      await prisma.user.update({
        where: { id: userId },
        data: { password: hashedPassword },
      });

      res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error updating password:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
