import { PropsWithChildren, useEffect } from "react";
import useUserStore from "../../store/useUserStore.ts";
import { auth } from "../../api/auth.ts";

const UserProvider = (props: PropsWithChildren) => {
  const userStore = useUserStore();

  const getUser = async () => {
    try {
      const user = await auth();
      userStore.load(user);
    } catch (e: any) {
      window.location.href = "/sign-in";
    }
  };

  useEffect(() => {
    if (!userStore.loaded) {
      getUser();
    }
  }, []);

  return <>{!userStore.isGuest && props.children}</>;
};

export default UserProvider;
