import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Image as ImageType } from "@prisma/client";
import arrowToTop from "@/static/svgs/arrow-right-top.svg";
import { getAscImages, getNewestImages } from "@/app/_actions/images.actions";
import { bufferToBase64Image } from "@/lib/bufferToBase64Image";
import { routes } from "@/keys/routes";
import { ScrollCard, GalleryScrollSkeleton } from ".";

type GalleryScrollProps = {
  categoryName?: string;
  direction?: "left" | "right";
  images?: ImageType[];
};

const GalleryCards: React.FC<{ images?: ImageType[] }> = async ({ images }) => {
  return (
    <div className="flex items-center justify-center md:justify-start">
      {images &&
        images.map(async (image) => (
          <ScrollCard
            name={image.name}
            file={await bufferToBase64Image(image.file)}
            key={image.id}
          />
        ))}
    </div>
  );
};

const GalleryScroll: React.FC<GalleryScrollProps> = async ({
  categoryName = "View All",
  direction = "left",
}) => {
  const images =
    categoryName === "View All"
      ? await getAscImages()
      : await getNewestImages();

  return (
    <section>
      <Link
        className="inline-flex items-center p-3 border border-ghost_white rounded-md hover:bg-light_gray duration-300"
        href={routes.CATEGORIES}
      >
        <p>{categoryName}</p>
        <Image
          className="ml-[2px]"
          width={22}
          alt="arrowToTop"
          src={arrowToTop}
        />
      </Link>
      <div
        className={`w-screen inline-flex ${
          direction === "left"
            ? "animate-infinite-scroll-to-left"
            : "animate-infinite-scroll-to-right"
        } hover:animation-pause`}
      >
        <GalleryScrollSkeleton>
          <GalleryCards images={images} />
        </GalleryScrollSkeleton>
        <GalleryScrollSkeleton>
          <GalleryCards images={images} />
        </GalleryScrollSkeleton>
      </div>
    </section>
  );
};

export default GalleryScroll;
