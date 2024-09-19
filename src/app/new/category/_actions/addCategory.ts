"use server";

import { routes } from "@/keys/routes";
import prisma from "@/lib/db";
import { categorySchema } from "@/schemas/category.schema";
import { redirect } from "next/navigation";

export const addCategory = async (_: unknown, formData: FormData) => {
  const result = categorySchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!result.success) return result.error.formErrors.fieldErrors;

  const data = result.data;

  try {
    await prisma.category.create({
      data,
    });

    return redirect(routes.CATEGORIES);
  } catch (error) {
    console.error("Error saving image to db:", error);
    return redirect(routes.CATEGORIES);
  }
};
