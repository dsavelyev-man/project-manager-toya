import {PostRequest} from "./types";
import { User } from "database"
import axios from "axios";

const signIn: PostRequest<{
  email: string
  password: string
}, User> = async (data) => {
  return axios.post("/auth", data)
}

export default signIn