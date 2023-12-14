import { User } from "database";
import { UseUserStore } from "@/store/useUserStore.ts";
import TextInput from "../../../../components/ui/TextInput.tsx";

const Default = (
  props: User & {
    set: UseUserStore["set"];
  },
) => {
  return (
    <div>
      <TextInput
        label="Фамилия"
        value={props.lastName}
        required
        onChange={(e) => props.set("lastName", e.target.value)}
        autoComplete="family-name"
      />
      <TextInput
        autoComplete="given-name"
        label="Имя"
        required
        onChange={(e) => props.set("firstName", e.target.value)}
        value={props.firstName}
      />
      <TextInput
        label="Отчество"
        required
        autoComplete="additional-name"
        onChange={(e) => props.set("surName", e.target.value)}
        value={props.surName}
      />
    </div>
  );
};

export default Default;
