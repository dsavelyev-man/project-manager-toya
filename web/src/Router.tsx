import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import SignInPage from "./pages/sign-in/SignInPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/sign-in",
    element: <SignInPage/>
  }
])

const Router = () => {
  return <RouterProvider router={router}/>
}

export default Router