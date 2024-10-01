import PageHeader from "@/components/PageHeader";
import React from "react";
import {
  InputForm,
  CollectionLayoutSkeleton,
  CollectionLayout,
} from "./_components";

const CollectionPage = () => {
  return (
    <>
      <PageHeader>Collection</PageHeader>
      <InputForm />
      <CollectionLayoutSkeleton>
        <CollectionLayout />
      </CollectionLayoutSkeleton>
    </>
  );
};

export default CollectionPage;
