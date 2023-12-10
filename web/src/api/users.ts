import { User } from "database";
import axios from "axios";

export const updateCurrentUser = async (user: User) => {
  return (await axios.patch("/users", user)).data;
};
