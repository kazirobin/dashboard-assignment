import { Flex } from "@radix-ui/themes";
import { FaBoxesPacking } from "react-icons/fa6";
import { NavLink } from "react-router";
const NavItem = ({ column, sidebarActive }) => (
  <NavLink
    to={column.path}
    className={({ isActive }) =>
      `block rounded px-2 m-2 ${isActive ? "text-amber-950 bg-amber-200" : ""}`
    }
  >
    {({ isActive }) => (
      <Flex px="2" m="2" align="center" gap="3">
        {column.icon} {(sidebarActive || isActive) && column.label}
      </Flex>
    )}
  </NavLink>
);

export const getColumns = ({ sidebarActive }) => [
  {
    id: 1,
    label: "Products",
    icon: <FaBoxesPacking />,
    path: "products",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
  {
    id: 2,
    label: "Users",
    icon: <FaBoxesPacking />,
    path: "users",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
];
