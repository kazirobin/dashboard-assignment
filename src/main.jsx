import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./router/routes";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")).render(
  <Theme>
    <RouterProvider router={router} />
  </Theme>
);
