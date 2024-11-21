import { ErrorMessage, Field } from "formik";
import { forwardRef, SelectHTMLAttributes } from "react";

type Optionstype = {
  value: string | number;
  label: string;
};

type FormikSelectProps = {
  errorsName?: string;
  label?: string;
  options?: Optionstype[];
} & SelectHTMLAttributes<HTMLSelectElement>;

const FormikSelect = forwardRef<HTMLSelectElement, FormikSelectProps>(
  ({ options, errorsName, label, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label>{label}</label>
        <Field as="select" ref={ref} {...props}>
          {options?.map((el) => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </Field>
        <ErrorMessage
          className="text-red-500"
          name={`${errorsName}`}
          component={"div"}
        />
      </div>
    );
  }
);

export default FormikSelect;
