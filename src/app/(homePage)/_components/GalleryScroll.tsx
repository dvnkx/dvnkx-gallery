import React from "react";

import Link from "next/link";
import { Image as ImageType } from "@prisma/client";
import ImageCard from "@/components/ImageCard";
import arrowToTop from "@/static/svgs/arrow-right-top.svg";
import Image from "next/image";

type GalleryScrollProps = {
  to?: string;
  categoryName?: string;
  direction?: "left" | "right";
  images?: ImageType[];
};

const GalleryCards: React.FC<{ images?: ImageType[] }> = ({ images }) => {
  return (
    <div className="flex items-center justify-center md:justify-start">
      {images && images.map((image) => <ImageCard key={image.id} />)}
    </div>
  );
};

const GalleryScroll: React.FC<GalleryScrollProps> = async ({
  to = "/",
  categoryName = "View All",
  direction = "left",
}) => {
  return (
    <section className="my-5">
      <Link
        className="inline-flex items-center p-3 border border-ghost_white rounded-md hover:bg-light_gray duration-300"
        href={to}
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
        <GalleryCards />
        <GalleryCards />
      </div>
    </section>
  );
};

export default GalleryScroll;
