import { Ref, forwardRef } from "react";
import Label from "./Label";
import Input from "./Input";

type InputFormProps = {
  type: string;
  name: string;
  placeholder: string;
  label: string;
  classname: string;
};

const InputForm = forwardRef(
  (props: InputFormProps, ref: Ref<HTMLInputElement>) => {
    const { classname, name, label, type, placeholder } = props;
    return (
      <div className={`w-full ${classname}`}>
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} name={name} placeholder={placeholder} ref={ref} />
      </div>
    );
  }
);

export default InputForm;
