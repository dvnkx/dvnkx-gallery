"use server";

import prisma from "@/lib/db";

export const getCategoriesName = () => {
  return prisma.category.findMany({
    select: { name: true, id: true },
  });
};

export const getImages = () => {
  return prisma.image.findMany({
    take: 10,
  });
};
