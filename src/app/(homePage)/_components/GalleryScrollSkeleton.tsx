import React, { ReactNode, Suspense } from "react";
import { ScrollCardSkeleton } from "./";

const GalleryScrollSkeleton = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense
      fallback={Array(6)
        .fill(1)
        .map((_, index) => (
          <ScrollCardSkeleton key={index} />
        ))}
    >
      {children}
    </Suspense>
  );
};

export default GalleryScrollSkeleton;
