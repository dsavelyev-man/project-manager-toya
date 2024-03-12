import { UserLink } from "shared";
import axios from "axios";
import { GetRequestPaginated } from "@/api/types";

export const getPaginatedLinks: GetRequestPaginated<UserLink, never> = async (
  page,
): Promise<UserLink[]> => {
  return (
    await axios.get("/links", {
      params: {
        page,
      },
    })
  ).data;
};

export default getPaginatedLinks;
