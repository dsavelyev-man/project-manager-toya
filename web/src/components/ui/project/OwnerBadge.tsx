import { motion } from "framer-motion";
import classNames from "classnames";
import getImage from "@/helpers/getImage.ts";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/Avatar.tsx";

const OwnerBadge = (props: { avatarUrl: string; label: string }) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={getImage(props.avatarUrl)} />
        <AvatarFallback>{props.label[0]}</AvatarFallback>
      </Avatar>
      <p className="text-sm text-muted-foreground">
        <span className="text-base-content/50">Владелец:</span> {props.label}
      </p>
    </div>
  );
};

export default OwnerBadge;
