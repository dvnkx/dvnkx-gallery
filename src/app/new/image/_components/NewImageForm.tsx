"use client";

import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { addImage } from "../_actions/addImage.action";
import { getCategoriesName } from "@/app/_actions/categories.actions";
import Area from "../../_components/Area";
import Form from "../../_components/Form";

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
    <Form action={action}>
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
    </Form>
  );
};

export default NewImageForm;
