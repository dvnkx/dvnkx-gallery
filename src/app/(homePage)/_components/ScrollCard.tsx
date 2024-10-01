import Image from "next/image";
import React from "react";

type ScrollCardProps = {
  file: string;
  name: string;
};

const ScrollCard: React.FC<ScrollCardProps> = ({ file, name }) => {
  return (
    <div className="group w-[375px] m-5 space-x-2 space-y-2 flex flex-col items-center bg-ghost_white relative cursor-pointer">
      <Image
        className="p-10 aspect-video"
        src={file}
        width={600}
        height={600}
        alt={"Garden"}
      />
      <h2 className="text-eerie_black text-lg font-bold absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </h2>
    </div>
  );
};

export default ScrollCard;
