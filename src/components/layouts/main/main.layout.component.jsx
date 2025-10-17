import Sidebar from "../../shared/sidebar";
import { Outlet } from "react-router";
import NavbarComponent from "../../shared/navbar";
import { Theme } from "@radix-ui/themes";
import { useState } from "react";


function MainLayout() {
  const [sidebarActive,setSidebarActive]=useState(true)
  const handleSidebar= () => { setSidebarActive(!sidebarActive) }
  return (
    <Theme>
      <div className="flex h-screen overflow-hidden">
         <Sidebar sidebarActive={sidebarActive} handleSidebar={handleSidebar}/>
        
        <div className="flex-1">
          <NavbarComponent handleSidebar={handleSidebar} sidebarActive={sidebarActive}/>
          <div className="h-screen overflow-scroll pb-40">
            <Outlet />
          </div>
        </div>
      </div>
    </Theme>
  );
}

export default MainLayout;
