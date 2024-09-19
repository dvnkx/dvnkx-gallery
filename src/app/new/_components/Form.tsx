import React, { ReactNode } from "react";
import SubmitButton from "./SubmitButton";

type FormProps = {
  action: (payload: FormData) => void;
  children: ReactNode;
};

const Form: React.FC<FormProps> = ({ action, children }) => {
  return (
    <form action={action} className="space-y-8 px-10">
      {children}
      <SubmitButton />
    </form>
  );
};

export default Form;
