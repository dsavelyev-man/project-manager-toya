import useUserStore from "../../../store/useUserStore.ts";
import Default from "../../../components/layout/Default.tsx";
import Header from "./components/Header.tsx";
import { useCallback, useEffect } from "react";
import { updateCurrentUser } from "../../../api/users.ts";
import * as debounce from "debounce";

const SettingsPage = () => {
  return (
    <Default>
      <Header />
    </Default>
  );
};

export default SettingsPage;
