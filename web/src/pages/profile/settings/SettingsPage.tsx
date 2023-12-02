import useUserStore from "../../../store/useUserStore.ts";
import Default from "../../../components/layout/Default.tsx";
import Header from "./Header.tsx";

const SettingsPage = () => {
  const userStore = useUserStore();

  return (
    <Default>
      <Header {...userStore.user} set={userStore.set} />
    </Default>
  );
};

export default SettingsPage;
