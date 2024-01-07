import { PostRequest } from "@/api/types";
import axios from "axios";
import { ProjectBoard } from "shared";

export const createBoard: PostRequest<
  {
    name: string;
    projectId: string;
  },
  ProjectBoard
> = async (data) => {
  return (await axios.post("/projects/boards", data)).data;
};
