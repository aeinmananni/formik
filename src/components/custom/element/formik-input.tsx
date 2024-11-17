import { ErrorMessage, Field } from "formik";
import { forwardRef, InputHTMLAttributes } from "react";

type FormikInputProps = {
  errorsName?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormikInput = forwardRef<HTMLInputElement, FormikInputProps>(
  ({ errorsName, label, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label>{label}</label>
        <Field ref={ref} {...props} />
        <ErrorMessage
          className="text-red-500"
          name={`${errorsName}`}
          component={"div"}
        />
      </div>
    );
  }
);

export default FormikInput;
