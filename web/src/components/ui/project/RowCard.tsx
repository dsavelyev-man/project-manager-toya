import Avatar from "@components/ui/project/Avatar.tsx";
import { ProjectWithOwner } from "@/api/projects.ts";
import OwnerBadge from "@components/ui/project/OwnerBadge.tsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  showed: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  initial: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const RowCard = (props: ProjectWithOwner) => {
  const owner = props.members[0].user;

  return (
    <motion.div
      variants={variants}
      className="card bg-base-200 opacity-0 hover:bg-base-300 transition shadow-xl relative"
    >
      <div className="card-body p-4">
        <div className="flex items-center gap-4">
          <Avatar name={props.name} />
          <div className="flex flex-col gap-2">
            <p className="text-xl">{props.name}</p>
            <OwnerBadge
              avatarUrl={owner.avatarUrl}
              label={`${owner.firstName} ${owner.lastName}`}
            />
          </div>
        </div>
      </div>
      <Link
        to={`/projects/${props.id}`}
        className="absolute left-0 top-0 w-full h-full rounded-xl"
      />
    </motion.div>
  );
};

export default RowCard;
