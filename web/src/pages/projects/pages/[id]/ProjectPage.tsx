import Default from "@components/layout/Default.tsx";
import useGetById from "@/hooks/useGetById.ts";
import { getProjectById, ProjectWithMembers } from "@/api/projects.ts";
import Heading from "@/pages/projects/pages/[id]/components/Heading.tsx";
import getOwnerProject from "@/helpers/getOwnerProject.ts";
import { Skeleton } from "@components/ui/Skeleton.tsx";
import { useParams } from "react-router-dom";
import AddBoard from "@/pages/projects/pages/[id]/components/AddBoard.tsx";
import Boards, { FakeBoards } from "@/pages/projects/pages/[id]/pages/boards";

const ProjectPage = () => {
  const project = useGetById<ProjectWithMembers>(getProjectById);
  return (
    <Default>
      <div className="mt-12">
        {project.loading ? (
          <div>
            <Skeleton className="h-[160px]" />
            <FakeBoards />
          </div>
        ) : project.data ? (
          <>
            <Heading {...project.data} />
            <Boards {...project.data} />
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
