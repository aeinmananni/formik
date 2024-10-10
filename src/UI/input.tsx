import { InputHTMLAttributes } from "react";

type InputProps = {
  lable?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ lable, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="">{lable}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
