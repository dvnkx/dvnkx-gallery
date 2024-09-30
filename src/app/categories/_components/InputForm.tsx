import React from "react";

const InputForm = () => {
  return (
    <form
      className="flex items-start gap-4 max-md:flex-col max-md:items-center"
      action={""}
    >
      <label className="text-2xl" htmlFor="category">
        Search by Category
      </label>
      <input
        className="flex-1 max-w-[700px] min-w-[200px] lg:ml-60 rounded-md p-3 text-eerie_black"
        type="text"
        name="category"
        placeholder="Category"
      />

      <button
        className="p-3 min-w-[200px] border border-ghost_white rounded-md hover:bg-light_gray duration-300"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default InputForm;
