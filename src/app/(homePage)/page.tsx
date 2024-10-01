import React from "react";
import PageHeader from "@/components/PageHeader";
import { GalleryScroll, Categories } from "./_components";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <PageHeader>Gallery</PageHeader>
      <GalleryScroll direction="left" />
      <GalleryScroll direction="right" categoryName="Newest" />
      <Categories />
    </main>
  );
};

export default HomePage;
