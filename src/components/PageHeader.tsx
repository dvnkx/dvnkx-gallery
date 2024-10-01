import React, { ReactNode } from "react";

const PageHeader = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex justify-center">
      <h1 className="my-5 text-7xl font-kyiv tracking-wide">{children}</h1>
    </section>
  );
};

export default PageHeader;
