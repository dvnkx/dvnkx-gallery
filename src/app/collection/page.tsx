import PageHeader from "@/components/PageHeader";
import React from "react";
import { CollectionLayoutSkeleton, CollectionLayout } from "./_components";
import { getImages } from "../_actions/images.actions";

const CollectionPage = async () => {
  const images = await getImages();
  return (
    <>
      <PageHeader>Collection</PageHeader>
      <CollectionLayoutSkeleton>
        <CollectionLayout images={images} />
      </CollectionLayoutSkeleton>
    </>
  );
};

export default CollectionPage;
