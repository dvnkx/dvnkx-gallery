import React from "react";
import { bufferToBase64Image } from "@/lib/bufferToBase64Image";
import { getImages } from "@/app/_actions/images.actions";
import { ImageCard } from ".";

const GalleryLayout = async () => {
  const images = await getImages();

  return (
    <main className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 py-10 md:py-20 gap-4">
      {images &&
        images.map(async (image) => {
          const file = await bufferToBase64Image(image.file);
          return <ImageCard key={image.id} file={file} image={image} />;
        })}
    </main>
  );
};

export default GalleryLayout;
