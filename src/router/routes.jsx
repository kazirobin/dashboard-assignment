import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layouts/main";
import Products from "../pages/products";
import Home from "../pages/home";
import Users from "../pages/users/users.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/users", element: <Users /> },
    ],
  },
]);
