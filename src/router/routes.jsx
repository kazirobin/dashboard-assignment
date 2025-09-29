import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layouts/main";
import Products from "../components/pages/products";
import Home from "../components/pages/home";
import Users from "../components/pages/users/users.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index:true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/users", element: <Users /> },
    ],
  },
]);
