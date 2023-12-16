import axios from "axios";
import { Project, Prisma } from "shared";
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
  ProjectWithOwner
> = async (data) => {
  return (await axios.post("/projects", data)).data;
};

export const getProjectById: GetRequestById<ProjectWithOwner> = async (id) => {
  return (await axios.get(`/projects/${id}`)).data;
};

export type ProjectWithOwner = Prisma.ProjectGetPayload<{
  include: {
    members: {
      include: {
        user: true;
      };
    };
  };
}>;

export default createProject;
