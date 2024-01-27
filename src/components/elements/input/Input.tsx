import { Ref, forwardRef } from "react";

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
};

const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const { type, name, placeholder } = props;

  return (
    <input
      type={type}
      id={name}
      name={name}
      className="w-full border border-primaryDark p-3 text-dark mt-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default Input;
