import { useEffect, useState } from "react";
import MenuIcon from "/assets/menu.svg";

import { NavLink } from "react-router";
import { FaBoxesPacking } from "react-icons/fa6";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { getColumns } from "../../../data/sidebar.data";
const Sidebar = ({ sidebarActive, handleSidebar }) => {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    setColumns(getColumns({ sidebarActive }));
  }, [sidebarActive]);
  return (
    <div className="bg-pink-500">
      <Flex direction="column" justify="start">
        <Flex px="6">
          {sidebarActive ? (
            <Heading color="blue" style={{ paddingBlock:"17px" }}>
              Dashboard
            </Heading>
          ) : (
              <Button color="amber" onClick={handleSidebar}>
        <img src={MenuIcon} alt="" className="cursor-pointer text-white" />
      </Button>
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
