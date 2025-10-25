import { useEffect, useState } from "react";
import MenuIcon from "/assets/menu.svg";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { getColumns } from "../../../data/sidebar.data";
import { NavLink } from "react-router";
import Icon from "../dynamicIcon/dynamicIcon.component";
import { FaBarsStaggered } from "react-icons/fa6";
const Sidebar = ({ sidebarActive, handleSidebar }) => {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    setColumns(getColumns({ sidebarActive }));
  }, [sidebarActive]);
  return (
    <div>
      <Flex direction="column" className={`${!sidebarActive && "items-center"}`}>
        <Flex align="center" className="cursor-pointer h-18 ps-1">
          {sidebarActive ? (
            <NavLink to="/">
              <Icon src="/assets/Logo.png" styles="ps-6" />
            </NavLink>
          ) : (
            <FaBarsStaggered onClick={handleSidebar}/>
          )}
        </Flex>

        {columns.map((column) => (
          <div key={column.id}>{column.content(column)}</div>
        ))}
      </Flex>
    </div>
  );
};

export default Sidebar;
