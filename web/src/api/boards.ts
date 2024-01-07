import { PostRequest } from "@/api/types";
import axios from "axios";
import { Project, ProjectBoard } from "shared";

export const createBoard: PostRequest<
  {
    name: string;
    projectId: number;
  },
  ProjectBoard
> = async (data) => {
  return (await axios.post("/projects/boards", data)).data;
};

export const getBoardsByProject = async (
  page: number,
  extra: {
    id: number;
  },
): Promise<ProjectBoard[]> => {
  return (
    await axios.get(`/projects/boards/${extra.id}`, {
      params: {
        page,
      },
    })
  ).data;
};
