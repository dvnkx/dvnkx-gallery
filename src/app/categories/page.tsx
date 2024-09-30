import React from "react";
import InputForm from "./_components/InputForm";
import PageHeader from "@/components/PageHeader";
import Gallery from "./_components/Gallery";

const GalleryPage = () => {
  return (
    <div>
      <PageHeader>Gallery</PageHeader>
      <InputForm />
      <Gallery />
    </div>
  );
};

export default GalleryPage;
