import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  text?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ text, ...props }: ButtonProps) => {
  return <button {...props}>{text}</button>;
};

export default Button;
