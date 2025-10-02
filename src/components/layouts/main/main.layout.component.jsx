import Sidebar from "../../shared/sidebar";
import { Outlet } from "react-router";
import NavbarComponent from "../../shared/navbar";
import { Theme } from "@radix-ui/themes";

function MainLayout() {
  return (
    <Theme>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1">
          <NavbarComponent />
          <Outlet />
        </div>
      </div>
    </Theme>
  );
}

export default MainLayout;