import Layout from "../components/Layout";
import { AuthProvider } from "../context/Auth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import CreatePostPage from "../pages/Post";
// import RankingPage from "../pages/Ranking";
import RegisterPage from "../pages/Register";

export const routes = [
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
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
      {
        path: "/criar-postagem",
        element: <CreatePostPage />,
      },
    ],
  },
];
