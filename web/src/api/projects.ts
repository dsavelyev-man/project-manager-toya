import axios from "axios";
import { Project, Prisma, ProjectMember } from "shared";
import { GetRequestById, PostRequest } from "@/api/types";

export const getPaginatedProjects = async (
  page: number,
): Promise<Project[]> => {
  return (
    await axios.get("/projects", {
      params: {
        page,
      },
    })
  ).data;
};

export const createProject: PostRequest<
  { name: string },
  ProjectWithMembers
> = async (data) => {
  return (await axios.post("/projects", data)).data;
};

export const getProjectById: GetRequestById<ProjectWithMembers> = async (
  id,
) => {
  return (await axios.get(`/projects/${id}`)).data;
};

export type ProjectWithMembers = Prisma.ProjectGetPayload<{
  include: {
    members: {
      include: {
        user: true;
      };
    };
    boards: true;
  };
}>;

export const getProjectTeamById: GetRequestById<{
  members: ProjectMember[];
}> = async (id) => {
  return (await axios.get(`/projects/${id}/team`)).data;
};

export default createProject;
