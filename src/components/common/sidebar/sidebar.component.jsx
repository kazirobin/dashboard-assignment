33
import { useEffect, useState } from "react";
import {  Flex  } from "@radix-ui/themes";
import { getColumns } from "../../../data/sidebar.data";
import { NavLink } from "react-router";
import { FaBarsStaggered } from "react-icons/fa6";
import DynamicIcon from "../dynamicIcon/dynamicIcon.component";
const Sidebar = ({ sidebarActive, handleSidebar }) => {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    setColumns(getColumns({ sidebarActive }));
  }, [sidebarActive]);
  return (
    <div>
      <>
        <Flex align="center" className="cursor-pointer h-18 ps-6">
          {sidebarActive ? (
            <NavLink to="/">
              <DynamicIcon src="/assets/Logo.png" styles="ps-6" />
            </NavLink>
          ) : (
            <FaBarsStaggered onClick={handleSidebar}/>
          )}
        </Flex>

        {columns.map((column) => (
          <div key={column.id}>{column.content(column)}</div>
        ))}
      </>
    </div>
  );
};

export default Sidebar;
