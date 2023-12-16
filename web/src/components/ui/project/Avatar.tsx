import getImage from "@/helpers/getImage.ts";

const Avatar = (props: {
  avatarUrl?: string;
  name: string;
  size?: "large";
}) => {
  return (
    <div className="avatar">
      <div className="w-20 rounded-full border border-accent">
        <div
          className="h-20 w-20 bg-base-100 flex justify-center items-center text-2xl font-semibold"
          style={{
            backgroundImage: props.avatarUrl
              ? `url(${getImage(props.avatarUrl)})`
              : undefined,
          }}
        >
          {props.avatarUrl ? <></> : props.name[0].toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
