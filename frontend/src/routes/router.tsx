import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import RegisterPage from "../pages/Register";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
];
