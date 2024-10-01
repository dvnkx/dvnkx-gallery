import React from "react";

const ScrollCardSkeleton = () => {
  return (
    <div className="group w-[375px] m-5 space-x-2 space-y-2 flex flex-col items-center bg-ghost_white relative cursor-pointer animate-pulse">
      <div className="p-10 aspect-video w-[375px] h-[210px]" />
      <div className="text-eerie_black text-lg font-bold absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default ScrollCardSkeleton;
