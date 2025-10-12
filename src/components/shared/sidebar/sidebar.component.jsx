import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FaBoxesPacking } from "react-icons/fa6";
import { Flex, Heading } from "@radix-ui/themes";
const Sidebar = () => {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    setColumns([
      {
        id: 1,
        label: "Products",
        icon: <FaBoxesPacking />,
        path: "products",
        content: (column) => {
          return (
            <NavLink
              to={column.path}
              className={({ isActive }) =>
                `block rounded px-2 m-2 ${
                  isActive ? "text-amber-950 bg-amber-200" : ""
                }`
              }
            >
              <Flex px="2" m="2" justify="center" align="center" gap="3">
                {column.icon} {column.label}
              </Flex>
            </NavLink>
          );
        },
      },
      {
        id: 2,
        label: "Users",
        icon: <FaBoxesPacking />,
        path: "users",
        content: (column) => {
          return (
            <NavLink
              to={column.path}
              className={({ isActive }) =>
                `block rounded px-2 m-2 ${
                  isActive ? "text-amber-950 bg-amber-200" : ""
                }`
              }
            >
              <Flex px="2" m="2" align="center" gap="3">
                {column.icon} {column.label}
              </Flex>
            </NavLink>
          );
        },
      },
    ]);
  }, []);
  return (
    <div className="bg-pink-500">
      <Flex direction="column">
        <Flex justify="center" py="2">
          <Heading color="blue">Dashboard</Heading>
        </Flex>

        {columns.map((column) => (
          <div key={column.id}>{column.content(column)}</div>
        ))}
      </Flex>
    </div>
  );
};

export default Sidebar;
