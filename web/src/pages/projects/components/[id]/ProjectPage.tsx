import Default from "@components/layout/Default.tsx";
import useGetById from "@/hooks/useGetById.ts";
import { getProjectById, ProjectWithMembers } from "@/api/projects.ts";
import Heading from "@/pages/projects/components/[id]/components/Heading.tsx";
import getOwnerProject from "@/helpers/getOwnerProject.ts";
import { Skeleton } from "@components/ui/Skeleton.tsx";
import { useParams } from "react-router-dom";
import AddBoard from "@/pages/projects/components/[id]/components/AddBoard.tsx";

const ProjectPage = () => {
  const project = useGetById<ProjectWithMembers>(getProjectById);
  return (
    <Default>
      <div className="mt-12">
        {project.loading ? (
          <div>
            <Skeleton className="h-[160px]" />
          </div>
        ) : project.data ? (
          <>
            <Heading {...project.data} />
            <AddBoard id={project.data.id} />
          </>
        ) : (
          <h1 className="text-4xl text-center text-accent">
            Такого проекта не существует:(
          </h1>
        )}
      </div>
    </Default>
  );
};

export default ProjectPage;
