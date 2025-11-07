import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layouts/main";
import Home from "../pages/home";
import Products from "../pages/products";
import Users from "../pages/users";
import Recipes from "../pages/recipes";
import ErrorPage from "../pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/users", element: <Users /> },
      { path: "/recipes", element: <Recipes /> },
    ],
  },
]);
