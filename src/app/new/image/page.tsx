import PageHeader from "@/components/PageHeader";
import React from "react";
import NewImageForm from "./_components/NewImageForm";

const NewImagePage = () => {
  return (
    <main>
      <PageHeader>New</PageHeader>
      <NewImageForm />
    </main>
  );
};

export default NewImagePage;
