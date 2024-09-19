import React, { ComponentProps, ReactNode } from "react";

type AreaType = ComponentProps<"label"> & {
  label: string;
  error?: string[] | undefined;
  children: ReactNode;
};

const Area: React.FC<AreaType> = ({ label, error, children }) => {
  return (
    <div className="space-y-2 flex flex-col">
      <label className="text-2xl">{label}</label>
      {children}
      {error && <div className="text-auburn">{error}</div>}
    </div>
  );
};

export default Area;
