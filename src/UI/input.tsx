import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = {
  lable?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ lable, errorMessage, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="">{lable}</label>
        <input ref={ref} {...props} />
        <small className="text-red-500">{errorMessage}</small>
      </div>
    );
  }
);

export default Input;
