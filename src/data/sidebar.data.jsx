import { Flex } from "@radix-ui/themes";
import { FaBoxesPacking } from "react-icons/fa6";
import { NavLink } from "react-router";
import Icon from "../components/shared/icon/icon.component";
const NavItem = ({ column, sidebarActive }) => (
  <NavLink
    to={column.path}
    className={({ isActive }) =>
      `block rounded px-2 py-2 m-2 relative ${isActive ? "text-amber-950 bg-amber-200" : ""}`
    }
  >
    {({ isActive }) => (
      <Flex  align="center"  style={{}}>
        {column.icon} 
        

        {(sidebarActive ) && <div className="ps-4">{column.label}</div>}
        
      </Flex>
    )}
  </NavLink>
);

export const getColumns = ({ sidebarActive }) => [
  {
    id: 1,
    label: "Products",
    icon: <Icon src="/assets/dashboard.svg" />,
    path: "products",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
  {
    id: 2,
    label: "Users",
    icon: <Icon src="/assets/product.svg" styles="text-red-400 strick-red-400"/>,
    path: "users",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
];
