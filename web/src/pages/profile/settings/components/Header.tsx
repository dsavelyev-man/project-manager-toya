import Alert from "@components/ui/TextInput.tsx";
import { useState } from "react";
import Default from "./Default.tsx";
import Avatar from "./Avatar.tsx";
import useTabs from "@/hooks/useTabs.tsx";
import AnimatedHeight from "@components/ui/AnimatedHeight.tsx";

const Header = () => {
  const [error, setErrors] = useState<undefined | string>(undefined);
  // const [active, setActive] = useState<"default" | "avatar">("default");
  const tabs = useTabs(
    [
      {
        label: "Инфромация",
        value: "default",
      },
      {
        label: "Аватар",
        value: "avatar",
      },
    ],
    "default",
  );

  let content;

  switch (tabs.active) {
    case "avatar":
      content = <Avatar />;
      break;
    default:
      content = <Default />;
  }

  return (
    <AnimatedHeight className="card w-full bg-base-100 shadow-xl">
      {error ? (
        <Alert className="alert-error h-12" label={error} />
      ) : (
        <div className="h-12" />
      )}
      <div className="card-body">
        <div className="flex p-2">{tabs.element}</div>
        {content}
      </div>
    </AnimatedHeight>
  );
};

export default Header;
