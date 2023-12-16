import Default from "@components/layout/Default.tsx";
import AnimatedHeight from "@components/ui/AnimatedHeight.tsx";
import Avatar from "@components/ui/project/Avatar.tsx";
import useGetById from "@/hooks/useGetById.ts";
import { getProjectById, ProjectWithOwner } from "@/api/projects.ts";

const ProjectPage = () => {
  const project = useGetById<ProjectWithOwner>(getProjectById);

  console.log(project.data);
  return (
    <Default>
      {project.loading ? (
        <div>loading</div>
      ) : project.data ? (
        <AnimatedHeight className="card w-full bg-base-100 shadow-xl">
          <Avatar name={project.data.name} />
        </AnimatedHeight>
      ) : (
        <div>not found</div>
      )}
    </Default>
  );
};

export default ProjectPage;
