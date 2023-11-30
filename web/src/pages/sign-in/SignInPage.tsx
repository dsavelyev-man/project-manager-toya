import {Link} from "react-router-dom";
import useFormWithRequest from "../../hooks/useFormWithRequest.ts";
import signIn from "../../api/auth.ts";

const SignInPage = () => {
  const form = useFormWithRequest({
    email: "",
    password: ""
  }, signIn, (res) => {
    console.log(res)
  })

  return <div className="flex justify-center items-center h-screen">
    <form onSubmit={form.onSubmit} className="card card-bordered w-96 bg-base-100 shadow-xl p-4 gap-4">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Ваша почта</span>
        </div>
        <input
          value={form.data.email}
          onChange={(e) => form.onChange("email", e.target.value)}
          type="email"
          autoComplete="email"
          placeholder="example@mail.com"
          className="input input-bordered"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Ваш пароль</span>
        </div>
        <input
          value={form.data.password}
          onChange={(e) => form.onChange("password", e.target.value)}
          type="password"
          autoComplete="password"
          placeholder="••••••••"
          className="input input-bordered"
        />
      </label>
      <div className="flex flex-col gap-2">
        <button className="btn">Войти</button>
        <span className="text-sm ml-2">
          Забыли пароль? <Link className="link" to="/reset/password">Восстановить</Link>
        </span>
      </div>
    </form>
  </div>
}

export default SignInPage