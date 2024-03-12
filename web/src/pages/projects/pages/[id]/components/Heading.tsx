import AnimatedHeight from "@components/ui/AnimatedHeight.tsx";
import Avatar from "@components/ui/project/Avatar.tsx";
import OwnerBadge from "@components/ui/project/OwnerBadge.tsx";
import getOwnerProject from "@/helpers/getOwnerProject.ts";
import { ProjectWithMembers } from "@/api/projects.ts";

import { Link } from "react-router-dom";
import Actions from "@/pages/projects/pages/[id]/components/Actions.tsx";
import { Card, CardContent } from "@components/ui/Card.tsx";
import React from "react";
import { Plus, Users } from "lucide-react";

const Heading = (props: ProjectWithMembers) => {
  const owner = getOwnerProject(props);

  return (
    <AnimatedHeight className="w-full">
      <Card className="p-4 h-[160px]">
        <CardContent className="justify-between flex flex-row">
          <div className="flex gap-4 items-center">
            <Avatar name={props.name} size="large" />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl">{props.name}</h1>
              <OwnerBadge
                avatarUrl={owner.user.avatarUrl}
                label={owner.user.lastName + " " + owner.user.lastName}
              />
              <div className="flex">
                <Link
                  to={`/projects/${props.id}/team`}
                  className="flex items-center gap-1 bg-muted hover:bg-primary/20 transition py-1 px-2 rounded-full cursor-pointer"
                >
                  <Users size={20} />
                  {props.members.length}
                  <Plus size={14} />
                </Link>
              </div>
            </div>
          </div>
          <Actions id={props.id} />
        </CardContent>
      </Card>
    </AnimatedHeight>
  );
};

export default Heading;
