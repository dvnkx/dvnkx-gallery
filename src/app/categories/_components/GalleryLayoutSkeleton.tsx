import React, { ReactNode, Suspense } from "react";
import ImageCardSkeleton from "./ImageCardSkeleton";

const GalleryLayoutSkeleton = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 py-10 md:py-20 gap-4">
          {Array(12)
            .fill(1)
            .map((_, index) => {
              return <ImageCardSkeleton key={index} />;
            })}
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default GalleryLayoutSkeleton;
