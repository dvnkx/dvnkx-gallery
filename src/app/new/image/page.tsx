import React from "react";
import { Metadata } from "next/types";
import PageHeader from "@/components/PageHeader";
import NewImageForm from "./_components/NewImageForm";

export const metadata: Metadata = {
  title: "Gallery | New Image",
  description: "Upload new image.",
};

const NewImagePage = () => {
  return (
    <main>
      <PageHeader>New</PageHeader>
      <NewImageForm />
    </main>
  );
};

export default NewImagePage;
