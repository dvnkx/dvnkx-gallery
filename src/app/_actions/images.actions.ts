"use server";

import prisma from "@/lib/db";

export const getImages = () => {
  return prisma.image.findMany({
    take: 10,
    include: { Category: { select: { name: true } } },
  });
};

export const getAscImages = () => {
  return prisma.image.findMany({
    take: 6,
    orderBy: {
      name: "asc",
    },
  });
};

export const getNewestImages = () => {
  return prisma.image.findMany({
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });
};
