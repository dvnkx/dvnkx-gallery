import React, { ReactNode, Suspense } from "react";
import HomeImageCardSkeleton from "./HomeImageCardSkeleton";

const GalleryCardsSkeleton = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense
      fallback={Array(6)
        .fill(1)
        .map((_, index) => (
          <HomeImageCardSkeleton key={index} />
        ))}
    >
      {children}
    </Suspense>
  );
};

export default GalleryCardsSkeleton;
