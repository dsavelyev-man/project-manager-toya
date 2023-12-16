import { motion } from "framer-motion";
import classNames from "classnames";
import getImage from "@/helpers/getImage.ts";

const OwnerBadge = (props: { avatarUrl: string; label: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="avatar">
        <div className="h-8 rounded-full">
          <img src={getImage(props.avatarUrl)} />
        </div>
      </div>
      <p>
        <span className="text-base-content/50">Владелец:</span> {props.label}
      </p>
    </div>
  );
};

export default OwnerBadge;
