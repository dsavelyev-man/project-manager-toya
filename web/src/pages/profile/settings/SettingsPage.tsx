import useUserStore from "../../../store/useUserStore.ts";
import Default from "../../../components/layout/Default.tsx";
import Header from "./Header.tsx";

const SettingsPage = () => {
  const user = useUserStore((s) => s.user)


  return <Default>
    <Header {...user}/>
  </Default>
}

export default SettingsPage