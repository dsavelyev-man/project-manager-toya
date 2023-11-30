import {HTMLAttributes} from "react";
import * as classNames from "classnames";

const Container = (props: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={classNames("ml-auto mr-auto max-w-[1440px]", props.className)}>

  </div>
}

export default Container