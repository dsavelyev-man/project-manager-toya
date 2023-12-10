import useUserStore from "../../../store/useUserStore.ts";
import Default from "../../../components/layout/Default.tsx";
import Header from "./Header.tsx";
import { useEffect } from "react";
import { updateCurrentUser } from "../../../api/users.ts";

const SettingsPage = () => {
  const userStore = useUserStore();

  useEffect(() => {
    updateCurrentUser(userStore.user);
  }, [userStore.user]);

  return (
    <Default>
      <Header {...userStore.user} set={userStore.set} />
    </Default>
  );
};

export default SettingsPage;
