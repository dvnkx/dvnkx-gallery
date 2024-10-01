"use server";

import prisma from "@/lib/db";

export const getCategories = () => {
  return prisma.category.findMany({
    select: { name: true, id: true },
  });
};
