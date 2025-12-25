import { Flex } from "@radix-ui/themes";
import { FaRegHeart, FaUserLarge } from "react-icons/fa6";
import { NavLink } from "react-router";
import { AiFillProduct } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { RiDashboard3Line } from "react-icons/ri";
import { PiChats, PiListChecksBold } from "react-icons/pi";
import { LuRows3 } from "react-icons/lu";






export const getLinks = [
  {
    title: null,
    type: "group",
    id: 1,
    children: [
      {
        id: "dashboard",
        type: "item",
        path: "/",
        icon: <RiDashboard3Line />,
        label: "Dashboard",
      },
      {
        id: "products",
        type: "item",
        path: "products",
        icon: <AiFillProduct />,
        label: "Products",
      },
      {
        id: "favorites",
        type: "item",
        path: "favorites",
        icon: <FaRegHeart />,
        label: "Favorites",
      },
      {
        id: "inbox",
        type: "item",
        path: "inbox",
        icon: <PiChats />,
        label: "Inbox",
      },
      {
        id: "orderLists",
        type: "item",
        path: "order-lists",
        icon: <PiListChecksBold />,
        label: "Order Lists",
      },
      {
        id: "productStock",
        type: "item",
        path: "product-stock",
        icon: <LuRows3 />,
        label: "Product Stock",
      },
    ],
  },
  {
    id: 2,
    title: "Pages",
    type: "group",
    children: [
      {
        id: "users",
        type: "item",
        path: "users",
        icon: <FaUserLarge />,
        label: "Users",
      },
      {
        id: "recipes",
        type: "item",
        path: "recipes",
        icon: <FaUserLarge />,
        label: "Recipes",
      },
     
    ],
  },
];







export const getColumns = ({ sidebarActive }) => [
  {
    id: 1,
    label: "Dashboard",
    icon: <RiDashboard3Line />,
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
    label: "",
    icon: null,
    path: null,
    content: (column) => {
      return (
        <NavItem
          column={column}
          sidebarActive={sidebarActive}
          title="Pages"
          hr={true}
        />
      );
    },
  },
  {
    id: 8,
    label: "Users",
    icon: <FaUserLarge />,
    path: "users",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
  {
    id: 9,
    label: "Recipes",
    icon: <GiHamburger />,
    path: "recipes",
    content: (column) => {
      return <NavItem column={column} sidebarActive={sidebarActive} />;
    },
  },
];
