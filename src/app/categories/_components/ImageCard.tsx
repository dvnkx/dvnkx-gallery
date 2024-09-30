import { Image as ImageType } from "@prisma/client";
import React from "react";
import Image from "next/image";

type CardProps = {
  image: Omit<ImageType, "file">;
  file: string;
};

const ImageCard: React.FC<CardProps> = ({ image, file }) => {
  return (
    <div className="mb-4 break-inside-avoid">
      <Image
        src={file}
        alt={"image" + image.id}
        className="w-full object-cover rounded-lg"
        height={250}
        width={250}
      />
    </div>
  );
};

export default ImageCard;
