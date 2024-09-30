import { Image } from "@prisma/client";

type CategoryName = {
  name: string;
} | null;

export type ImageWithCategory = { Category: CategoryName } & Image;
