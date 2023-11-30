import Navbar from "../smart/navbar";
import {PropsWithChildren} from "react";

const Default = (props: PropsWithChildren) => {
  return <div>
    <Navbar/>
    <div className="grid grid-cols-[244px,1fr]">
      <div/>
      <div>
        {
          props.children
        }
      </div>
    </div>
  </div>
}

export default Default