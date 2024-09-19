"use client";
import React, { ComponentProps, ReactNode } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addCategory } from "../_actions/addCategory";

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
  const [error, action] = useFormState(addCategory, {});

  return (
    <form action={action} className="space-y-8 px-10">
      <Area htmlFor="name" label="Name" error={error?.name}>
        <input
          className="w-[400px] rounded-md p-2 text-eerie_black"
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
          className="w-[400px] rounded-md p-2 text-eerie_black"
          type="text"
          placeholder="category description*"
          name="description"
          id="description"
        />
      </Area>
      <SubmitButton />
    </form>
  );
};

export default NewImageForm;
