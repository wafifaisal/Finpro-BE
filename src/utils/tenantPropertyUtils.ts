import prisma from "../prisma";

export async function fetchTenantProperties(
  tenantId: string,
  skip: number,
  limit: number
) {
  const totalProperties = await prisma.property.count({ where: { tenantId } });
  const totalPages = Math.ceil(totalProperties / limit);
  const properties = await prisma.property.findMany({
    where: { tenantId },
    include: {
      PropertyImages: true,
      RoomTypes: {
        include: {
          RoomImages: true,
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
