import React from "react";
import InputForm from "./_components/InputForm";
import PageHeader from "@/components/PageHeader";
import GalleryLayout from "./_components/GalleryLayout";

const GalleryPage = () => {
  return (
    <div>
      <PageHeader>Gallery</PageHeader>
      <InputForm />
      <GalleryLayout />
    </div>
  );
};

export default GalleryPage;
