import Sidebar from "../../shared/sidebar";
import { Outlet } from "react-router";
import NavbarComponent from "../../shared/navbar";
import { Theme } from "@radix-ui/themes";

function MainLayout() {
  return (
    <Theme>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1">
          <NavbarComponent />
          <div className="h-screen overflow-scroll pb-40">
            <Outlet />
          </div>
        </div>
      </div>
    </Theme>
  );
}

export default MainLayout;
