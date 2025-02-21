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
import { getPagination } from "../../utils/TenantQueryUtils";
import {
  getVerifyEmailHtml,
  sendVerifyEmail,
} from "../../utils/userEmailUtils";
import { buildUserFilter } from "../../utils/userQueryUtils";

const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;

export class UserController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const filter = buildUserFilter(req.query);
      const { page, limit, skip } = getPagination(req.query);
      const countUser = await prisma.user.aggregate({ _count: { _all: true } });
      const total_page = Math.ceil(countUser._count._all / limit);
      const users = await prisma.user.findMany({
        where: filter,
        orderBy: { createdAt: "asc" },
        take: limit,
        skip,
      });
      res.status(200).send({ total_page, page, users });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }

  async getUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
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

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await prisma.user.delete({ where: { id } });
      res.status(200).send("User Deleted");
    } catch (err) {
      console.error("Error deleting user:", err);
      res.status(400).send(err);
    }
  }

  async editAvatarUser(req: Request, res: Response): Promise<void> {
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

  async updateEmail(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      const { email } = req.body;
      const currentUser = await prisma.user.findUnique({
        where: { id: userId },
        select: { email: true },
      });
      if (!currentUser) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      if (currentUser.email === email) {
        res.status(400).json({
          message: "New email cannot be the same as the current email",
        });
        return;
      }
      const payload = { id: userId, newEmail: email };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const html = getVerifyEmailHtml(token);
      await sendVerifyEmail(email, html);
      res.status(200).json({
        message:
          "Verification email sent successfully. Please check your inbox.",
      });
    } catch (err) {
      console.error("Error updating email:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async verifyEmail(req: Request, res: Response): Promise<void> {
    try {
      const { token } = req.params;
      const decoded = verify(token, process.env.JWT_KEY!) as {
        id: string;
        newEmail: string;
      };
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

  updatePassword = async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.user?.id;
      const { currentPassword, newPassword } = req.body;
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { password: true },
      });
      if (!user) throw { message: "User not found" };
      if (!user.password) throw { message: "User password is not available" };
      if (!(await bcrypt.compare(currentPassword, user.password)))
        throw { message: "Current password is incorrect" };
      if (await bcrypt.compare(newPassword, user.password))
        throw {
          message: "New password cannot be the same as the current password",
        };
      const hashedPassword = await bcrypt.hash(newPassword, 10);
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
