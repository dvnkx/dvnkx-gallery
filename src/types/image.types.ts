import { Image } from "@prisma/client";

type CategoryName = {
  name: string;
} | null;

export type ImageWithCategory = { category: CategoryName } & Image;
