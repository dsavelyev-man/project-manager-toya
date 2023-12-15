import { TabContent } from "@components/ui/Tabs.tsx";
import { motion } from "framer-motion";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import getImage from "@/helpers/getImage.ts";
import { updateAvatar } from "@/api/users.ts";
import useUserStore from "@/store/useUserStore.ts";
import classNames from "classnames";

const AvatarItem = (props: {
  className: string;
  avatarUrl: string;
  loading: boolean;
}) => {
  return (
    <motion.div
      initial={{ filter: `blur(10px)` }}
      animate={{ filter: `blur(0px)`, scale: props.loading ? 0 : 1 }}
      className="avatar"
    >
      <div className={classNames("rounded-full", props.className)}>
        <img src={getImage(props.avatarUrl)} />
      </div>
    </motion.div>
  );
};

const Avatar = () => {
  const userStore = useUserStore();
  const [loading, setLoading] = useState(false);

  const onUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];

    const form = new FormData();

    form.append("avatar", file);

    setLoading(true);
    try {
      const res = await updateAvatar(form);

      userStore.set("avatarUrl", res.avatarUrl);
      setTimeout(() => setLoading(false), 1000);
    } catch (e) {
      console.error(e);
      setTimeout(() => setLoading(false), 1000);
    }
  };
  return (
    <TabContent>
      <div className="flex items-start">
        <div className="w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Аватар</span>
            </div>
            <input
              onChange={onUpload}
              type="file"
              className="file-input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex gap-4 items-start relative">
          {["h-12 w-12", "h-32 w-32", "h-48 h-48"].map((className, index) => (
            <AvatarItem
              loading={loading}
              className={className}
              key={index}
              avatarUrl={userStore.user.avatarUrl}
            />
          ))}
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: loading ? 1 : 0,
              x: `-50%`,
              y: `-50%`,
            }}
            className="loading loading-spinner loading-lg absolute left-[50%] top-[50%] translate-absolute"
          ></motion.div>
        </div>
      </div>
    </TabContent>
  );
};

export default Avatar;
