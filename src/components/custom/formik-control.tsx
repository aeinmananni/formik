import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import FormikInput from "./element/formik-input";
import FormikTextArea from "./element/formik-textarea";

type FormikControlProps = {
  control?: "input" | "textarea" | "select" | "radio" | "checkbox";
  errorsName?: string;
  label?: string;
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
);

const FormikControl = ({ control, ...props }: FormikControlProps) => {
  switch (control) {
    case "input":
      return (
        <FormikInput {...(props as InputHTMLAttributes<HTMLInputElement>)} />
      );
    case "textarea":
      return (
        <FormikTextArea
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      );
    case "select":
    case "radio":
    case "checkbox":
    default:
      return null;
  }
};

export default FormikControl;
