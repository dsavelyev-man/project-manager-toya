import { User } from "database";
import TextInput from "../../../components/ui/TextInput.tsx";
import Alert from "../../../components/ui/Alert.tsx";
import { useState } from "react";

const Header = (props: User) => {
  const [error, setErrors] = useState<undefined | string>(undefined);

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <Alert className="alert-error">{error}</Alert>
      <div className="card-body grid grid-cols-3">
        <div>
          <TextInput
            label="Фамилия"
            value={props.lastName}
            autoComplete="family-name"
          />
          <TextInput
            autoComplete="given-name"
            label="Имя"
            value={props.firstName}
          />
          <TextInput
            label="Отчество"
            autoComplete="additional-name"
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
