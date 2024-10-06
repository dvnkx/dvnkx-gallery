import PageHeader from "@/components/PageHeader";
import React from "react";
import { CollectionLayoutSkeleton, CollectionLayout } from "./_components";

const CollectionPage = () => {
  return (
    <>
      <PageHeader>Collection</PageHeader>
      <CollectionLayoutSkeleton>
        <CollectionLayout />
      </CollectionLayoutSkeleton>
    </>
  );
};

export default CollectionPage;
