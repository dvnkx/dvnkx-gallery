import Image, { StaticImageData } from "next/image";
import React from "react";
import landscape from "../static/japanese_garden_2-wallpaper-3554x1999.jpg";

type ImageCardProps = {
  image?: StaticImageData;
  name?: string;
};

const ImageCard = ({ image = landscape, name = "Name" }: ImageCardProps) => {
  return (
    <div className="group w-[375px] m-5 space-x-2 space-y-2 flex flex-col items-center bg-ghost_white relative cursor-pointer">
      <Image className="p-10 aspect-video" src={image} alt={"Garden"} />
      <h2 className="text-eerie_black text-lg font-bold absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </h2>
    </div>
  );
};

export default ImageCard;
