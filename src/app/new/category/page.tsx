import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import React from "react";
import NewCategoryForm from "./_components/NewCategoryForm";

export const metadata: Metadata = {
  title: "Gallery | New Category",
  description: "Create new category.",
};

const NewCategoryPage = () => {
  return (
    <main>
      <PageHeader>New Category</PageHeader>
      <NewCategoryForm />
    </main>
  );
};

export default NewCategoryPage;
