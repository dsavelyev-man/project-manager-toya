import {InputHTMLAttributes} from "react";
import classNames from "classnames";
import {ERRORS} from "database";

const TextInput = (props: InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: ERRORS
}) => {
  const {label, error, ...data } = props

  return  <label className="form-control w-full">
    <div className="label">
      <span className="label-text">{props.label}</span>
    </div>
    <input
      {...data}
      type="text"
      className={classNames("input input-bordered", props.className)}
    />
  </label>
}

export default TextInput