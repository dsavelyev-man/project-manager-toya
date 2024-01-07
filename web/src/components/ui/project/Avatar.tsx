import getImage from "@/helpers/getImage.ts";
import classNames from "classnames";
import { cva, VariantProps } from "cva";
import {
  Avatar as RAvatar,
  AvatarFallback,
  AvatarImage,
} from "@components/ui/Avatar.tsx";

const avatar = cva({
  base: "bg-base-100 flex justify-center items-center font-semibold",
  variants: {
    size: {
      medium: "h-20 w-20 text-2xl",
      large: "h-32 w-32 text-4xl",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const Avatar = (
  props: { avatarUrl?: string; name: string } & VariantProps<typeof avatar>,
) => {
  return (
    <RAvatar className={avatar(props)}>
      <AvatarImage src={getImage(props.avatarUrl)} />
      <AvatarFallback>
        {props.avatarUrl ? <></> : props.name[0].toUpperCase()}
      </AvatarFallback>
    </RAvatar>
  );
};

export default Avatar;
