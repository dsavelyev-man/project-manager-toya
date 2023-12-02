import { HTMLAttributes } from "react";
import classNames from "classnames";

const Alert = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      role="alert"
      className={classNames("alert", props.className)}
    />
  );
};

export default Alert;
