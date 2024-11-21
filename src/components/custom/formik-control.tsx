import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import FormikInput from "./element/formik-input";
import FormikTextArea from "./element/formik-textarea";
import FormikSelect from "./element/formik-select";

type FormikControlProps = {
  control?: "input" | "textarea" | "select" | "radio" | "checkbox";
  errorsName?: string;
  label?: string;
  options?: { label: string; value: string | number }[];
} & (
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>
  | SelectHTMLAttributes<HTMLSelectElement>
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
      return (
        <FormikSelect {...(props as SelectHTMLAttributes<HTMLSelectElement>)} />
      );
    case "radio":
    case "checkbox":
    default:
      return null;
  }
};

export default FormikControl;
