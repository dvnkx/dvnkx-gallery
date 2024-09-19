"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

export const Nav: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <nav className="bg-light_gray text-eerie_black flex justify-center">
      {children}
    </nav>
  );
};

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, "className">
) => {
  const pathName = usePathname();
  return (
    <Link
      {...props}
      className={`p-4 hover:bg-charleston_green hover:text-philippine_gray focus-visible:bg-charleston_green focus-visible:text-philippine_gray max-md:text-xs
        ${
          pathName === props.href && "bg-eerie_black text-ghost_white"
        } text-eerie_black`}
    />
  );
};
