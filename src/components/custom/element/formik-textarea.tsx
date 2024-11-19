import { ErrorMessage, Field } from "formik";
import { forwardRef, TextareaHTMLAttributes } from "react";

type FormikTextAreaProps = {
  errorsName?: string;
  label?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const FormikTextArea = forwardRef<HTMLTextAreaElement, FormikTextAreaProps>(
  ({ errorsName, label, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label>{label}</label>
        <Field as="textarea" ref={ref} {...props} />
        <ErrorMessage
          className="text-red-500"
          name={`${errorsName}`}
          component={"div"}
        />
      </div>
    );
  }
);

export default FormikTextArea;
