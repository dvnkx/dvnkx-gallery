"use client";
import React, { ComponentProps, ReactNode, useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addImage } from "../actions/addImage.action";
import { getCategoriesName } from "@/app/_actions/categories.actions";

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

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="border border-ghost_white rounded-md p-2 hover:bg-light_gray duration-300 text-3xl"
      disabled={pending}
      type="submit"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const NewImageForm = () => {
  const [error, action] = useFormState(addImage, {});
  const [categories, setCategories] = useState<{ name: string; id: string }[]>(
    []
  );

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategoriesName();
      setCategories(fetchedCategories);
    };

    fetchCategories();
  }, []);

  return (
    <form action={action} className="space-y-8 px-10">
      <Area htmlFor="name" label="Name" error={error?.name}>
        <input
          className="w-[400px] rounded-md p-2 text-eerie_black"
          type="text"
          required
          placeholder="image name"
          name="name"
          id="name"
        />
      </Area>
      <Area
        htmlFor="description"
        label="Description"
        error={error?.description}
      >
        <textarea
          name="description"
          id="description"
          placeholder="optional*"
          className="w-[400px] rounded-md p-2 text-eerie_black"
        />
      </Area>
      <Area htmlFor="category" label="Category">
        <select
          defaultValue={
            categories.length !== 0 ? categories[0].name : "No categories"
          }
          className="w-[200px] rounded-md p-2 text-eerie_black"
          name="category"
          id="category"
        >
          {categories &&
            categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
        </select>
      </Area>
      <Area htmlFor="image" label="Image File" error={error?.image}>
        <input
          name="image"
          id="image"
          type="file"
          className="p-0 cursor-pointer"
          required
        />
      </Area>
      <SubmitButton />
    </form>
  );
};

export default NewImageForm;
