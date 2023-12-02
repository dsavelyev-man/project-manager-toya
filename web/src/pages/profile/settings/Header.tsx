import { User } from "database";
import TextInput from "../../../components/ui/TextInput.tsx";
import Alert from "../../../components/ui/Alert.tsx";
import { useState } from "react";
import { UseUserStore } from "../../../store/useUserStore.ts";

const Header = (
  props: User & {
    set: UseUserStore["set"];
  },
) => {
  const [error, setErrors] = useState<undefined | string>(undefined);

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      {error ? (
        <Alert className="alert-error h-12">{error}</Alert>
      ) : (
        <div className="h-12" />
      )}
      <div className="card-body grid grid-cols-3">
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
        <div>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Аватар</span>
            </div>
            <input
              type="file"
              className="file-input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
