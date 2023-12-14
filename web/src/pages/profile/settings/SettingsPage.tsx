import useUserStore from "../../../store/useUserStore.ts";
import Default from "../../../components/layout/Default.tsx";
import Header from "./components/Header.tsx";
import { useCallback, useEffect } from "react";
import { updateCurrentUser } from "../../../api/users.ts";
import * as debounce from "debounce";

const SettingsPage = () => {
  const userStore = useUserStore();
  const updateUser = useCallback(debounce(updateCurrentUser, 200), []);

  useEffect(() => {
    updateUser(userStore.user);
  }, [userStore.user]);

  return (
    <Default>
      <Header {...userStore.user} set={userStore.set} />
    </Default>
  );
};

export default SettingsPage;
