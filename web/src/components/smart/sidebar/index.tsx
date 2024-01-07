import useGetRows from "@/hooks/useGetRows.ts";
import getPaginatedLinks from "@/api/links.tsx";
import Link, { LinkSkeleton } from "@components/smart/sidebar/link.tsx";
import { ReactElement } from "react";
import { useLocation } from "react-router-dom";

const skeleton: ReactElement[] = [];

for (let i = 0; i < 32; i++) {
  const index = 32 - i;

  skeleton.push(<LinkSkeleton index={index} key={i} />);
}

const Sidebar = () => {
  let links = useGetRows(getPaginatedLinks);
  const location = useLocation();

  if (links.loading && Sidebar.links) {
    links = Sidebar.links;
  }

  if (links.data.length > 0) {
    Sidebar.links = links;
  } else {
    Sidebar.links = undefined;
  }

  return (
    <ul className="p-2 gap-2 flex flex-col py-0 h-[calc(100vh-76px)] overflow-y-scroll custom-scroll">
      {links.loading
        ? skeleton
        : links.data.map((link) => (
            <Link pathname={location.pathname} key={link.id} {...link} />
          ))}
    </ul>
  );
};

Sidebar.links = undefined;

export default Sidebar;
