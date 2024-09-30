import React from "react";
import ImageCard from "./ImageCard";

import { bufferToBase64Image } from "@/lib/bufferToBase64Image";
import { getImages } from "@/app/_actions/images.actions";

const GalleryLayout = async () => {
  const images = await getImages();

  return (
    <main className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 py-10 md:py-20 gap-4">
      {images &&
        images.map(async (image) => (
          <ImageCard
            key={image.id}
            file={await bufferToBase64Image(image.file)}
            image={image}
          />
        ))}
    </main>
  );
};

export default GalleryLayout;
