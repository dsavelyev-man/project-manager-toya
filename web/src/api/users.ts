import { User } from "shared";
import axios from "axios";

export const updateCurrentUser = async (user: User): Promise<User> => {
  return (await axios.patch("/users", user)).data;
};

export const updateAvatar = async (form: FormData): Promise<User> => {
  return (await axios.put("/users/current/avatar", form)).data;
};
