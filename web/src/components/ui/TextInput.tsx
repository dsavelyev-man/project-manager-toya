import { InputHTMLAttributes } from "react";
import classNames from "classnames";
import { ERRORS } from "shared";
import { Input } from "@components/ui/Input.tsx";
import { Label } from "@components/ui/Label.tsx";

const TextInput = (
  props: InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: ERRORS;
  },
) => {
  const { label, error, ...data } = props;

  return (
    <div className="space-y-1">
      <Label htmlFor={props.name} className="form-control w-full">
        {props.label}
      </Label>
      <Input
        {...data}
        type="text"
        className={classNames("input input-bordered", props.className)}
      />
    </div>
  );
};

export default TextInput;
