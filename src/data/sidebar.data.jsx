import { Flex } from "@radix-ui/themes";
import { FaBoxesPacking, FaUserLarge } from "react-icons/fa6";
import { NavLink } from "react-router";
import Icon from "../components/common/dynamicIcon/dynamicIcon.component";
import { AiFillProduct } from "react-icons/ai";
const NavItem = ({ column, sidebarActive }) => (
  <NavLink
    to={column.path}
    className={({ isActive }) =>
      `block rounded ps-4  m-2 border-l-4 border-amber-50 relative text-xl ${
        isActive
          ? "text-amber-950   bg-gray-100 border-l-blue-600"
          : "hover:border-l-gray-300 "
      }`
    }
  >
    {({ isActive }) => (
      <Flex align="center" className={ `h-10 rounded-sm ${isActive ? "bg-blue-600 text-white " :"hover:bg-gray-300 hover:text-blue-800"}`} style={{}}>
        
        {sidebarActive ? <div className="px-4">{column.icon}</div> :<div className={`p-4 rounded-4 bg-white ps-0 ${isActive ? "text-blue-600" : ""}`}>{column.icon}</div>}
        {sidebarActive && <div className="pe-3">{column.label}</div>}
      </Flex>
    )}
  </NavLink>
);

export const getColumns = ({ sidebarActive }) => [
  {
    id: 1,
    label: "Products",
    icon: <AiFillProduct />,
    path: "products",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
  {
    id: 2,
    label: "Users",
    icon: <FaUserLarge />,
    path: "users",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
];
