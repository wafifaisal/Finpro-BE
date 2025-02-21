import prisma from "../prisma";
import { Prisma } from "../../prisma/generated/client";

export async function fetchTenants(
  filter: Prisma.TenantWhereInput,
  limit: number,
  skip: number
) {
  const count = await prisma.tenant.aggregate({ _count: { _all: true } });
  const total_page = Math.ceil(count._count._all / limit);
  const tenants = await prisma.tenant.findMany({
    where: filter,
    orderBy: { createdAt: "asc" },
    take: limit,
    skip,
  });
  return { total_page, tenants };
}
