import Default from "@components/layout/Default.tsx";
import useTabs from "@/hooks/useTabs.tsx";
import ProjectstList from "@/pages/projects/components/ProjectstList.tsx";
import { useNavigate } from "react-router-dom";
import CreateProject from "@/pages/projects/components/create/CreateProject.tsx";

const ProjectsPage = (props: { active: "list" | "create" }) => {
  const navigate = useNavigate();
  const tabs = useTabs(
    [
      {
        label: "Список",
        value: "list",
        callback: () => navigate("/projects"),
      },
      {
        label: "Создать",
        value: "create",
        callback: () => navigate("/projects/create"),
      },
    ],
    props.active,
  );

  let content;

  switch (tabs.active) {
    case "create":
      content = <CreateProject />;
      break;
    default:
      content = <ProjectstList />;
  }

  return (
    <Default>
      <div className="flex">{tabs.element}</div>
      {content}
    </Default>
  );
};

export default ProjectsPage;
