import Sidebar from "../../common/sidebar";
import { Outlet } from "react-router";
import NavbarComponent from "../../common/navbar";
import { Theme } from "@radix-ui/themes";
import { useState } from "react";
import {  ToastContainer } from "react-toastify";

function MainLayout() {
  const [sidebarActive, setSidebarActive] = useState(true);
  const handleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <Theme>
      <div className="flex h-screen max-w-[1400px] mx-auto p-4  overflow-hidden">
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

          <div className="h-screen maz-w-[1200px] overflow-scroll pb-40 bg-[#F5F6FA]">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer/>
    </Theme>
  );
}

export default MainLayout;
