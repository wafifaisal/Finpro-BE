import { Request, Response } from "express";
import prisma from "../../prisma";
import { cloudinaryUpload } from "../../services/cloudinary";
import bcrypt from "bcrypt";
import { buildTenantFilter, getPagination } from "../../utils/TenantQueryUtils";
import { fetchTenants } from "../../utils/tenantDataFetcher";
import { fetchTenantProperties } from "../../utils/tenantPropertyUtils";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

export class TenantController {
  async getTenant(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.tenant);
      const filter = buildTenantFilter(req.query);
      const { page, limit, skip } = getPagination(req.query);
      const { total_page, tenants } = await fetchTenants(filter, limit, skip);
      res.status(200).send({ total_page, page, tenants });
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }

  async getTenantCount(req: Request, res: Response): Promise<void> {
    try {
      const count = await prisma.tenant.count();
      res.status(200).json({ count });
    } catch (err) {
      console.error("Error counting tenants:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getTenantProfile(req: Request, res: Response): Promise<void> {
    try {
      const tenantId = req.tenant?.id;
      if (!tenantId) {
        res.status(400).json({ message: "Tenant ID is missing" });
        return;
      }
      const tenant = await prisma.tenant.findUnique({
        where: { id: tenantId },
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
          createdAt: true,
          updatedAt: true,
          isVerify: true,
          googleId: true,
        },
      });
      if (!tenant) {
        res.status(404).json({ message: "Tenant not found" });
        return;
      }
      res.status(200).json(tenant);
    } catch (err) {
      console.error("Error fetching tenant profile:", err);
      res.status(500).json({ message: "Internal server error", error: err });
    }
  }

  async deleteTenant(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await prisma.tenant.delete({ where: { id } });
      res.status(200).send("Tenant Deleted");
    } catch (err) {
      console.error("Error deleting tenant:", err);
      res.status(400).send(err);
    }
  }

  async editAvatarTenant(req: MulterRequest, res: Response): Promise<void> {
    try {
      if (!req.file) throw { message: "File is empty" };
      const { secure_url } = await cloudinaryUpload(req.file, "avatar");
      await prisma.tenant.update({
        data: { avatar: secure_url },
        where: { id: req.tenant?.id },
      });
      res.status(200).send({ message: "Avatar edited!" });
    } catch (err) {
      console.error("Error editing tenant avatar:", err);
      res.status(400).send(err);
    }
  }

  async updatePassword(req: Request, res: Response): Promise<void> {
    try {
      const tenantId = req.tenant?.id;
      const { currentPassword, newPassword } = req.body;
      const tenant = await prisma.tenant.findUnique({
        where: { id: tenantId },
        select: { password: true },
      });
      if (!tenant) {
        res.status(404).json({ message: "Tenant not found" });
        return;
      }
      if (!tenant.password) {
        res.status(400).json({ message: "Tenant password is not available" });
        return;
      }
      if (!(await bcrypt.compare(currentPassword, tenant.password))) {
        res.status(400).json({ message: "Current password is incorrect" });
        return;
      }
      if (await bcrypt.compare(newPassword, tenant.password)) {
        res.status(400).json({
          message: "New password cannot be the same as the current password",
        });
        return;
      }
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await prisma.tenant.update({
        where: { id: tenantId },
        data: { password: hashedPassword },
      });
      res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Error updating password:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getTenantProperties(req: Request, res: Response): Promise<void> {
    try {
      const tenantId = req.tenant?.id;
      if (!tenantId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 4;
      const skip = (page - 1) * limit;
      const { properties, totalPages, totalProperties } =
        await fetchTenantProperties(tenantId, skip, limit);
      res.status(200).json({ properties, page, totalPages, totalProperties });
    } catch (err) {
      console.error("Error fetching tenant properties:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async getTenantPropertyCount(req: Request, res: Response): Promise<void> {
    try {
      const tenantId = req.params.tenantId;
      if (!tenantId) {
        res.status(400).json({ message: "Tenant ID is required" });
        return;
      }
      const totalProperties = await prisma.property.count({
        where: { tenantId, isAvailable: true },
      });
      res.status(200).json({ totalProperties });
    } catch (err) {
      console.error("Error fetching tenant property count:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
