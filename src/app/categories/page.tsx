import PageHeader from "@/components/PageHeader";
import React from "react";
import { InputForm, GalleryLayoutSkeleton, GalleryLayout } from "./_components";

const GalleryPage = () => {
  return (
    <>
      <PageHeader>Gallery</PageHeader>
      <InputForm />
      <GalleryLayoutSkeleton>
        <GalleryLayout />
      </GalleryLayoutSkeleton>
    </>
  );
};

export default GalleryPage;
