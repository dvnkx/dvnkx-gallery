"use client";

import React from "react";
import { useFormStatus } from "react-dom";

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

export default SubmitButton;
