import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import prisma from "../../../prisma";

export class SessionController {
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
      const decoded = verify(token, process.env.JWT_KEY!) as {
        id: string;
        type: string;
      };
      if (!decoded || !decoded.type) {
        res.status(403).send({ message: "Forbidden: Invalid token" });
        return;
      }
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
      res
        .status(401)
        .send({ message: "Unauthorized: Invalid or expired token" });
    }
  }
}
