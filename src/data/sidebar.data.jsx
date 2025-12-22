import { Flex } from "@radix-ui/themes";
import { FaRegHeart, FaUserLarge } from "react-icons/fa6";
import { NavLink } from "react-router";
import { AiFillProduct } from "react-icons/ai";
import { GiHamburger } from "react-icons/gi";
import { RiDashboard3Line } from "react-icons/ri";
import { PiChats, PiListChecksBold } from "react-icons/pi";
import { LuRows3 } from "react-icons/lu";
const NavItem = ({ column, sidebarActive, hr, title }) => {
  if (!column.path) {
    return (
      <div>
        {hr && <div className="border-[#797A7C] mt-2 border w-full"></div>}
        {sidebarActive ? (
          <div className="border-l-4 border-amber-50 block pt-3 -ml-1 ps-7 font-medium text-[#797A7C] uppercase  ">
            {title}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
  return (
    <NavLink
      to={column.path}
      className={({ isActive }) =>
        `block border-l-4 my-0.5 relative${
          isActive
            ? "text-amber-950   bg-gray-100 border-l-blue-600"
            : " border-l-amber-50 hover:border-l-gray-300"
        }`
      }
    >
      {({ isActive }) => (
        <Flex direction="column">
          <Flex
            align="center"
            className={`h-10 rounded-sm ms-4 ${
              isActive
                ? "bg-blue-600 text-white "
                : "hover:bg-gray-300 hover:text-blue-800"
            }`}
          >
            {sidebarActive ? (
              <div className="px-4 ">{column.icon}</div>
            ) : (
              <div
                className={` rounded-4 bg-white pe-6 py-3  ${
                  isActive && "text-blue-600"
                }`}
              >
                {column.icon}
              </div>
            )}
            {sidebarActive && <div className="pe-3">{column.label}</div>}
          </Flex>
        </Flex>
      )}
    </NavLink>
  );
};
export const getLinks = [
  {
    title: "Main",
    type:"group",
    id: 1,
    path: null,
    label: null,
    icon: null,
    children: [
      {
        id: 11,
        type:"item",
        path: "/",
        label: "Dashboard",
        icon: <RiDashboard3Line />,
      },
      {
        id: "category",
        icon: <RiDashboard3Line />,
        title: "Category List",
        type:"collapsable",
        subLink: [
          {
            id: "electronic",
            path: "/category/electronic",
            label: "Electronic",
            icon: <RiDashboard3Line />,
          },
          {
            id: "cosmetic",
            path: "/category/cosmetic",
            label: "Cosmetic",
            icon: <RiDashboard3Line />,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Main Two",
    type:"group",
    children: [
      {
        id: "user",
        path: "/user",
        label: "User",
        icon: <RiDashboard3Line />,
      },
      {
        id: 22,
        icon: <RiDashboard3Line />,
        title: "Category List",
        type:"collapsable",
        subLink: [
          {
            id: "electronic",
            path: "/category/electronic",
            label: "electronic",
            icon: <RiDashboard3Line />,
          },
          {
            id: "cosmetic",
            path: "/category/cosmetic",
            label: "cosmetic",
            icon: <RiDashboard3Line />,
          },
        ],
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
