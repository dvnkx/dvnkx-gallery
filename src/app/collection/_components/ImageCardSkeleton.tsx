import React from "react";

const ImageCardSkeleton = () => {
  const height = Math.floor(Math.random() * (450 - 200 + 1)) + 200 + "px";
  return (
    <div
      style={{ height }}
      className={`w-full rounded-lg bg-light_gray mb-4 break-inside-avoid animate-pulse`}
    />
  );
};

export default ImageCardSkeleton;
