import React from "react";
import GalleryScroll from "./_components/GalleryScroll";
import PageHeader from "@/components/PageHeader";
import Categories from "./_components/Categories";

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
