import { ProjectWithMembers } from "@/api/projects.ts";
// import { PROJECT_ROLES } from "shared";

const getOwnerProject = (project: ProjectWithMembers) => {
  let owner = project.members.find((item) => item.role === "OWNER");

  return owner;
};

export default getOwnerProject;
