"use client";
import React from "react";
import { useFormState } from "react-dom";
import { addCategory } from "../_actions/addCategory";
import { Area, Form } from "../../_components";

const NewImageForm = () => {
  const [error, action] = useFormState(addCategory, {});

  return (
    <Form action={action}>
      <Area htmlFor="name" label="Name" error={error?.name}>
        <input
          className="max-w-[400px] rounded-md p-2 text-eerie_black"
          type="text"
          required
          placeholder="category name"
          name="name"
          id="name"
        />
      </Area>
      <Area
        htmlFor="description"
        label="Description"
        error={error?.description}
      >
        <input
          className="max-w-[400px] rounded-md p-2 text-eerie_black"
          type="text"
          placeholder="category description*"
          name="description"
          id="description"
        />
      </Area>
    </Form>
  );
};

export default NewImageForm;
