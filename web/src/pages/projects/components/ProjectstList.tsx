import useRowList from "@/hooks/useRowList.tsx";
import { getPaginatedProjects } from "@/api/projects.ts";
import RowCard from "@components/ui/project/RowCard.tsx";

const ProjectsList = () => {
  const list = useRowList(getPaginatedProjects, {
    card: RowCard,
  });

  return <div className="mt-6">{list.element}</div>;
};

export default ProjectsList;
