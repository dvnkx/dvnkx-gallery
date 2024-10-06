import { Metadata } from "next/types";
import React from "react";
import { SearchInput } from "./_components";

export const metadata: Metadata = {
  title: "Gallery | Collection",
  description: "Collection description",
};

const CollectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SearchInput />
      {children}
    </>
  );
};

export default CollectionLayout;
