"use server";

import prisma from "@/lib/db";

export const getImages = () => {
  return prisma.image.findMany({
    take: 10,
    include: { Category: { select: { name: true } } },
  });
};
