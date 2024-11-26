/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field } from "formik";
import { forwardRef, InputHTMLAttributes } from "react";

type Optionstype = {
  value: string | number;
  label: string;
};

type FormikCheckBoxProps = {
  errorsName?: string;
  label?: string;
  options?: Optionstype[];
} & InputHTMLAttributes<HTMLInputElement>;

const FormikCheckBox = forwardRef<HTMLInputElement, FormikCheckBoxProps>(
  ({ options, errorsName, label, name, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && <label className="font-semibold">{label}</label>}
        <Field name={name}>
          {({ field }: any) => {
            return options?.map((option) => (
              <div key={option.value} className="flex items-center gap-2">
                <input
                  {...field}
                  {...props}
                  ref={ref}
                  type="checkbox"
                  id={`${name}-${option.value}`}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={`${name}-${option.value}`}>
                  {option.label}
                </label>
              </div>
            ));
          }}
        </Field>
        <ErrorMessage
          className="text-red-500 text-sm"
          name={errorsName ? errorsName : name ?? ""}
          component="div"
        />
      </div>
    );
  }
);

export default FormikCheckBox;
