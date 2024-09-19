import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";
import category from "@/static/svgs/category-svgrepo-com.svg";
import { getCategoriesName } from "@/app/_actions/categories.actions";
import { CategoryNameType } from "@/types/categories.types";

const Category: React.FC<{ name: string }> = ({ name }) => {
  const route = name.replace(" ", "").toLowerCase();
  return (
    <Link
      className="inline-flex items-center m-2 p-3 border border-ghost_white rounded-md hover:bg-light_gray duration-300 animate-pulse hover:animate-none"
      href={`/${route}`}
    >
      <h3>{name}</h3>
      <Image
        className="ml-2 max-md:hidden"
        alt={name}
        width={22}
        src={category}
      />
    </Link>
  );
};

const renderCategories = (categories: CategoryNameType[]): ReactNode => {
  const rows: ReactNode[] = [];
  let index = 0;

  for (let row = 1; index < categories.length; row++) {
    const rowItems = categories.slice(index, index + row);
    index += row;
    rows.push(
      <div
        key={row}
        className={`flex max-md:flex-wrap  justify-center space-x-5 my-5`}
      >
        {rowItems.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
    );
  }

  return rows;
};

const Categories = async () => {
  const categories = await getCategoriesName();

  return (
    <article className="flex flex-col items-center my-5">
      <h2 className="font-kyiv text-4xl">Categories</h2>
      <div className="my-2">{renderCategories(categories)}</div>
    </article>
  );
};

export default Categories;
