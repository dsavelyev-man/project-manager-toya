import useRowList from "@/hooks/useRowList.tsx";
import { getPaginatedProjects } from "@/api/projects.ts";
import RowCard from "@components/ui/project/RowCard.tsx";

const ProjectsList = () => {
  const list = useRowList(getPaginatedProjects, {
    card: RowCard,
  });

  return (
    <div className="overflow-y-scroll max-h-[calc(100vh-36px-66px)] custom-scroll">
      <div className="mt-6">{list.element}</div>
    </div>
  );
};

export default ProjectsList;
