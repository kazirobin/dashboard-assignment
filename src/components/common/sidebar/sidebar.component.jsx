import { useEffect, useState } from "react";
import MenuIcon from "/assets/menu.svg";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { getColumns } from "../../../data/sidebar.data";
import { NavLink } from "react-router";
import Icon from "../dynamicIcon/dynamicIcon.component";
const Sidebar = ({ sidebarActive, handleSidebar }) => {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    setColumns(getColumns({ sidebarActive }));
  }, [sidebarActive]);
  return (
    <div>
      <Flex direction="column" justify="start">
        <Flex justify="center" align="center" className="cursor-pointer h-18">
          {sidebarActive ? (
            <NavLink to="/">
              <Icon src="/assets/Logo.png" styles="ps-6" />
            </NavLink>
          ) : (
            <Icon src={MenuIcon} onClick={handleSidebar} />
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
