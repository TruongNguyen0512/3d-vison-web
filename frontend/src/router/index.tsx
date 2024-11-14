import AuthPage from "@/pages/AuthPage";
import LoginPage from "@/pages/AuthPage/LoginPage";
import RegisterPage from "@/pages/AuthPage/RegisterPage";
import HomePage from "@/pages/HomePage";
import NewsPage from "@/pages/NewsPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
]);

export default router;
