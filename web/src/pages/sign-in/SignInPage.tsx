import { Link } from "react-router-dom";
import useFormWithRequest from "../../hooks/useFormWithRequest.ts";
import { signIn } from "../../api/auth.ts";
import { Input } from "@components/ui/Input.tsx";
import { Label } from "@components/ui/Label.tsx";
import { Button } from "@components/ui/Button.tsx";

const SignInPage = () => {
  const form = useFormWithRequest(
    {
      email: "",
      password: "",
    },
    signIn,
    () => {
      //сделано черз ванильный js что бы подргузить печенюху
      window.location.href = "/";
    },
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={form.onSubmit}
        className="max-w-96 w-full flex flex-col p-4 space-y-2"
      >
        <Label htmlFor="email">Ваша почта</Label>
        <Input
          value={form.data.email}
          onChange={(e) => form.onChange("email", e.target.value)}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="example@mail.com"
        />
        <Label htmlFor="password">Ваш пароль</Label>
        <Input
          value={form.data.password}
          name="password"
          id="password"
          onChange={(e) => form.onChange("password", e.target.value)}
          type="password"
          autoComplete="password"
          placeholder="••••••••"
        />
        <div className="flex flex-col gap-2">
          <Button className="btn">Войти</Button>
          <span className="text-sm ml-2">
            Забыли пароль?{" "}
            <Link className="link" to="/reset/password">
              Восстановить
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
