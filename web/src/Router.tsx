import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import SignInPage from "./pages/sign-in/SignInPage.tsx";
import SettingsPage from "./pages/profile/settings/SettingsPage.tsx";
import ProjectsPage from "@/pages/projects/ProjectsPage.tsx";
import ProjectPage from "@/pages/projects/pages/[id]/ProjectPage.tsx";
import Board from "@/pages/projects/pages/[id]/pages/boards/[boardId]/Board.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile/settings",
    element: <SettingsPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage active="list" />,
  },
  {
    path: "/projects/create",
    element: <ProjectsPage active="create" />,
  },
  {
    path: "/projects/:id",
    element: <ProjectPage />,
  },
  {
    path: "/projects/:id/boards/:boardId",
    element: <Board />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
