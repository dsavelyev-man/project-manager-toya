import { User } from "shared";
import useUserStore, { UseUserStore } from "@/store/useUserStore.ts";
import TextInput from "../../../../components/ui/TextInput.tsx";
import { TabContent } from "@components/ui/Tabs.tsx";
import * as debounce from "debounce";
import { updateCurrentUser } from "@/api/users.ts";

const updateUser = debounce(updateCurrentUser, 200);

const Default = () => {
  const userStore = useUserStore();
  const set = (key: keyof User, value: string) => {
    userStore.set(key, value);
    updateUser({
      ...userStore.user,
      [key]: value,
    });
  };

  return (
    <TabContent>
      <TextInput
        label="Фамилия"
        name="lastName"
        value={userStore.user.lastName}
        required
        onChange={(e) => set("lastName", e.target.value)}
        autoComplete="family-name"
      />
      <TextInput
        autoComplete="given-name"
        label="Имя"
        required
        name="firstName"
        onChange={(e) => set("firstName", e.target.value)}
        value={userStore.user.firstName}
      />
      <TextInput
        label="Отчество"
        required
        name="surName"
        autoComplete="additional-name"
        onChange={(e) => set("surName", e.target.value)}
        value={userStore.user.surName}
      />
    </TabContent>
  );
};

export default Default;
