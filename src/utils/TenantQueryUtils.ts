import { Prisma } from "../../prisma/generated/client";
import { ParsedQs } from "qs";

export function buildTenantFilter(query: ParsedQs): Prisma.TenantWhereInput {
  const filter: Prisma.TenantWhereInput = {};
  const search = query.search as string;
  if (search) {
    filter.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
    ];
  }
  return filter;
}

export function getPagination(query: ParsedQs): {
  page: number;
  limit: number;
  skip: number;
} {
  const page = parseInt(query.page as string) || 1;
  const limit = 10;
  const skip = limit * (page - 1);
  return { page, limit, skip };
}
