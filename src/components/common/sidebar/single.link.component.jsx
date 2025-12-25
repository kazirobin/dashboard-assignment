import { Flex } from "@radix-ui/themes";
import { NavLink } from "react-router";

const SingleLink = ({ column, sidebarActive }) => {

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

export default SingleLink;
