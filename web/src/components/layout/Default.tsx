import Navbar from "../smart/navbar";
import { PropsWithChildren } from "react";
import UserProvider from "../providers/UserProvider.tsx";

const Default = (props: PropsWithChildren) => {
  return (
    <UserProvider>
      <div>
        <Navbar />
        <div className="grid grid-cols-[244px,1fr]">
          <div />
          <div className="px-4">{props.children}</div>
        </div>
      </div>
    </UserProvider>
  );
};

export default Default;
