import { getImages } from "@/app/_actions/categories.actions";
import { bufferToBase64Image } from "@/lib/bufferToBase64Image";
import Image from "next/image";
import React from "react";

const Gallery = async () => {
  const images = await getImages();

  return (
    <main>
      {images &&
        images.map(async (image) => (
          <Image
            alt={"image" + image.id}
            src={await bufferToBase64Image(image.file)}
            width={500}
            height={500}
          />
        ))}
    </main>
  );
};

export default Gallery;
