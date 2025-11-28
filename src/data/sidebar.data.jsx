import { Flex } from "@radix-ui/themes";
import {  FaRegHeart, FaUserLarge } from "react-icons/fa6";
import { NavLink } from "react-router";
import { AiFillProduct } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { RiDashboard3Line } from "react-icons/ri";
import { PiChats, PiListChecksBold } from "react-icons/pi";
import { LuRows3 } from "react-icons/lu";
const NavItem = ({ column, sidebarActive,hr, title }) => (
  <NavLink
    to={column.path}
    className={({ isActive }) =>
      `block border-l-4 my-2 border-amber-50 relative text-xl ${
        isActive
          ? "text-amber-950   bg-gray-100 border-l-blue-600"
          : "hover:border-l-gray-300 "
      }`
    }
  >
    {({ isActive }) => (
      <Flex  direction="column" >
        {hr && <div className="bg-[#797A7C] h-0.5 -ml-1 border-l-4 border-amber-50"></div>}
        {title && <div className="border-l-4 border-amber-50 block py-4 -ml-1 ps-7 font-medium text-[#797A7C] uppercase  ">
          
          {title}
          </div>}
        
          <Flex align="center" className={ `h-10 rounded-sm ms-4 ${isActive ? "bg-blue-600 text-white " :"hover:bg-gray-300 hover:text-blue-800"}`}>


        {sidebarActive ? <div className="px-4">{column.icon}</div> :<div className={`p-4 rounded-4 bg-white ps-0 ${isActive && "text-blue-600" }`}>{column.icon}</div>}
        {sidebarActive && <div className="pe-3">{column.label}</div>}
          </Flex>
        
      </Flex>
    )}
    
  </NavLink>
);

export const getColumns = ({ sidebarActive }) => [
  {
    id: 1,
    label: "Dashboard",
    icon: <RiDashboard3Line  />,
    path: "/",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
  {
    id: 2,
    label: "Products",
    icon: <AiFillProduct />,
    path: "products",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
  {
    id: 3,
    label: "Favorites",
    icon: <FaRegHeart />,
    path: "favorites",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
  {
    id: 4,
    label: "Inbox",
    icon: <PiChats />,
    path: "inbox",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
  {
    id: 5,
    label: "Order Lists",
    icon: <PiListChecksBold />,
    path: "order-lists",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
  {
    id: 6,
    label: "Product Stock",
    icon: <LuRows3 />,
    path: "product-stock",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
  {
    id: 7,
    label: "Users",
    icon: <FaUserLarge />,
    path: "users",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} title="Pages" hr={true}/>;
    },
  },
  {
    id: 8,
    label: "Recipes",
    icon: <GiHamburger />,
    path: "recipes",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
];
