import React from "react";
import GalleryScroll from "./_components/GalleryScroll";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <GalleryScroll direction="left" />
      <GalleryScroll direction="right" categoryName="Newest" />
    </main>
  );
};

export default HomePage;
