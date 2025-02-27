import prisma from "../prisma";

export async function fetchTenantProperties(
  tenantId: string,
  skip: number,
  limit: number
) {
  const totalProperties = await prisma.property.count({
    where: { tenantId, isAvailable: true },
  });
  const totalPages = Math.ceil(totalProperties / limit);

  const properties = await prisma.property.findMany({
    where: { tenantId, isAvailable: true },
    include: {
      PropertyImages: {
        where: { deletedAt: null },
      },
      RoomTypes: {
        where: { deletedAt: null },
        include: {
          RoomImages: {
            where: { deletedAt: null },
          },
          Review: true,
          seasonal_prices: true,
          Unavailable: true,
        },
      },
      tenant: true,
      location: true,
    },
    skip,
    take: limit,
  });

  return { properties, totalPages, totalProperties };
}
