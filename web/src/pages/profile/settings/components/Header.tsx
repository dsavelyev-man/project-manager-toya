import { User } from "database";
import Alert from "@components/ui/TextInput.tsx";
import { useState } from "react";
import { UseUserStore } from "@/store/useUserStore.ts";
import Default from "./Default.tsx";
import Avatar from "./Avatar.tsx";
import classNames from "classnames";

const Header = (
  props: User & {
    set: UseUserStore["set"];
  },
) => {
  const [error, setErrors] = useState<undefined | string>(undefined);
  const [active, setActive] = useState<"default" | "avatar">("default");

  let content;

  switch (active) {
    case "avatar":
      content = <Avatar {...props} />;
      break;
    default:
      content = <Default {...props} />;
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      {error ? (
        <Alert className="alert-error h-12">{error}</Alert>
      ) : (
        <div className="h-12" />
      )}
      <div className="card-body">
        <div className="flex">
          <div role="tablist" className="tabs tabs-boxed">
            <a
              role="tab"
              className={classNames("tab", {
                "tab-active": active === "default",
              })}
              onClick={() => setActive("default")}
            >
              Информация
            </a>
            <a
              role="tab"
              className={classNames("tab", {
                "tab-active": active === "avatar",
              })}
              onClick={() => setActive("avatar")}
            >
              Аватар
            </a>
          </div>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Header;
