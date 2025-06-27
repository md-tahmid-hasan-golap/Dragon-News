import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

import CategoryNews from "../Components/pages/CategoryNews";
import Home from "../Components/pages/Home";
import Login from "../Components/pages/Login";
import Register from "../Components/pages/Register";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news",
    element: <div>This is news</div>,
  },
  {
    path: "/*",
    element: <div>Error404</div>,
  },
]);

export default router;
