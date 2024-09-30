import React from "react";
import InputForm from "./_components/InputForm";
import PageHeader from "@/components/PageHeader";
import GalleryLayout from "./_components/GalleryLayout";
import GalleryLayoutSkeleton from "./_components/GalleryLayoutSkeleton";

const GalleryPage = () => {
  return (
    <div>
      <PageHeader>Gallery</PageHeader>
      <InputForm />
      <GalleryLayoutSkeleton>
        <GalleryLayout />
      </GalleryLayoutSkeleton>
    </div>
  );
};

export default GalleryPage;
