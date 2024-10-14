import { InputHTMLAttributes } from "react";

type InputProps = {
  lable?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ lable, errorMessage, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="">{lable}</label>
      <input {...props} />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};

export default Input;
