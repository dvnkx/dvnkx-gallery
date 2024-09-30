import React from "react";
import Image from "next/image";
import { ImageWithCategory } from "@/types/image.types";

type CardProps = {
  image: Omit<ImageWithCategory, "file">;
  file: string;
};

const ImageCard: React.FC<CardProps> = ({ image, file }) => {
  const { id, name, description, createdAt, Category } = image;
  return (
    <div className="relative mb-4 break-inside-avoid group cursor-pointer">
      <Image
        src={file}
        alt={"image" + id}
        className="w-full object-cover rounded-lg"
        height={250}
        width={250}
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <div
          className="
         text-center p-2"
        >
          <h3 className="font-bold">{name}</h3>
          {description && <p>{description}</p>}
          <p>
            {new Date(createdAt).toLocaleDateString().replaceAll("/", " · ")}
          </p>
          <p>Category: {Category?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
