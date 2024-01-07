import { UserLink } from "shared";
import { Link as RLink } from "react-router-dom";
import { Button } from "@components/ui/Button.tsx";
import classNames from "classnames";

const Link = (link: UserLink & { pathname: string }) => {
  let url = `/projects/${link.projectId}`;

  return (
    <li className="h-8">
      <Button
        variant="ghost"
        className={classNames("relative w-full justify-start overflow-hidden", {
          "bg-accent": link.pathname === url,
        })}
      >
        <RLink
          title={link.name}
          className="h-full w-full absolute left-0 top-0"
          to={url}
        ></RLink>
        {link.name}
      </Button>
    </li>
  );
};

export const LinkSkeleton = (props: { index: number }) => {
  return (
    <li
      className="h-32 skeleton"
      style={{
        opacity: props.index / 10,
      }}
    ></li>
  );
};

export default Link;
