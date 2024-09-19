"use server";

import prisma from "@/lib/db";
import imageSchema from "@/schemas/image.schema";

export const addImage = async (_: unknown, formData: FormData) => {
  const result = imageSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!result.success) return result.error.formErrors.fieldErrors;

  const { name, description, image, category } = result.data;

  const file = image as File;

  if (file == null) return console.error("No file uploaded!");

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    await prisma.image.create({
      data: {
        name,
        description,
        file: buffer,
        categoryId: category
      },
    });
  } catch (error) {
    return console.error("Error saving image to db: ", error);
  }
};
