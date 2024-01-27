import { ReactNode, MouseEvent } from "react";

type ButtonProps = {
  children?: ReactNode;
  classname?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children = "...",
  classname = "bg-slate-700",
  onClick = () => {},
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`h-10 px-6 font-normal transition duration-300 rounded-md ${classname}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
