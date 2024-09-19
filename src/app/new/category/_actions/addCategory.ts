"use server";

import { routes } from "@/keys/routes";
import prisma from "@/lib/db";
import { categorySchema } from "@/schemas/category.schema";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { redirect } from "next/navigation";

export const addCategory = async (_: unknown, formData: FormData) => {
  const result = categorySchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!result.success) return result.error.formErrors.fieldErrors;

  const data = result.data;

  const newCategory = await prisma.category.create({
    data,
  });

  if (!newCategory) return "Error";

  return redirect(routes.CATEGORIES);
};
