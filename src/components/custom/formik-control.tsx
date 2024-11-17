import { InputHTMLAttributes } from "react";
import FormikInput from "./element/formik-input";

type FormikControlProps = {
  control?: "input" | "textarea" | "select" | "radio" | "checkbox";
  errorsName?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormikControl = ({ control, ...props }: FormikControlProps) => {
  switch (control) {
    case "input":
      return <FormikInput {...props} />;
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    default:
      return null;
  }
};

export default FormikControl;
