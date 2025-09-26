import { createBrowserRouter } from "react-router";
import MainLayout from "../components/layouts/main";
import Products from "../components/pages/products";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [{ path: "/products", element: <Products /> }],
  },
]);
