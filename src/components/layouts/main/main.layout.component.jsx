import Sidebar from "../../common/sidebar";
import { Outlet } from "react-router";
import NavbarComponent from "../../common/navbar";
import { Theme } from "@radix-ui/themes";
import { useState } from "react";

function MainLayout() {
  const [sidebarActive, setSidebarActive] = useState(true);
  const handleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <Theme>
      <div className="flex h-screen max-w-7xl mx-auto py-4 overflow-hidden">
        <div className="">
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
