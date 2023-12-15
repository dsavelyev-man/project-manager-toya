import { GetRequest, PostRequest } from "./types";
import { User } from "shared";
import axios from "axios";

export const signIn: PostRequest<
  {
    email: string;
    password: string;
  },
  User
> = async (data) => {
  return (await axios.post("/auth", data)).data;
};

export const auth: GetRequest<User> = async () => {
  return (await axios.get<User>("/auth")).data;
};
