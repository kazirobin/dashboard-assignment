import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layouts/main";
import Home from "../pages/home";
import Products from "../pages/products";
import Users from "../pages/users";
import Recipes from "../pages/recipes";
import ErrorPage from "../pages/error";
import Favorites from "../pages/favorites";
import Inbox from "../pages/inbox";
import OrderLists from "../pages/order-lists";
import ProductStock from "../pages/product-stock";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/favorites", element: <Favorites /> },
      { path: "/inbox", element: <Inbox /> },
      { path: "/order-lists", element: <OrderLists /> },
      { path: "/product-stock", element: <ProductStock /> },
      { path: "/users", element: <Users /> },
      { path: "/recipes", element: <Recipes /> },
    ],
  },
]);
