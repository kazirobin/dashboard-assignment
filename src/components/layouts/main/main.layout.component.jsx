import Sidebar from "../../shared/sidebar";
import { Outlet } from "react-router";
import NavbarComponent from "../../shared/navbar";
import { Theme } from "@radix-ui/themes";
import { useState } from "react";

function MainLayout() {
  const [sidebarActive, setSidebarActive] = useState(true);
  const handleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <Theme>
      <div className="flex h-screen overflow-hidden">
        

        <div className="bg-pink-500">
          <Sidebar
            sidebarActive={sidebarActive}
            handleSidebar={handleSidebar}
          />
        </div>

        <div className="flex-1">

          <div>
            <NavbarComponent
              handleSidebar={handleSidebar}
              sidebarActive={sidebarActive}
            />
          </div>

          <div className="h-screen overflow-scroll pb-40">
            <Outlet />
          </div>

        </div>
      </div>
    </Theme>
  );
}

export default MainLayout;
