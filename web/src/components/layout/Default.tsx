import Navbar from "../smart/navbar";
import { PropsWithChildren } from "react";
import UserProvider from "../providers/UserProvider.tsx";
import Sidebar from "@components/smart/sidebar";

const Default = (props: PropsWithChildren) => {
  return (
    <UserProvider>
      <div>
        <Navbar />
        <div className="grid grid-cols-[244px,1fr]">
          <Sidebar />
          <div className="px-4">{props.children}</div>
        </div>
      </div>
    </UserProvider>
  );
};

export default Default;
