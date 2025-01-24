import prisma from "../prisma";
export const findTenant = async (name: string, email: string) => {
  const tenant = await prisma.tenant.findFirst({
    where: { OR: [{ name: name }, { email: email }] },
  });

  return tenant;
};
