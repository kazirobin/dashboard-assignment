33;
import { useEffect, useState } from "react";
import { Flex } from "@radix-ui/themes";
import { getLinks } from "../../../data/sidebar.data";
import { NavLink } from "react-router";
import { FaBarsStaggered } from "react-icons/fa6";
import DynamicIcon from "../dynamicIcon/dynamicIcon.component";
import SingleLink from "./single.link.component";
const Sidebar = ({ sidebarActive, handleSidebar }) => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns(getLinks);
  }, []);

  return (
    <div className="sidebar">
      <Flex align="center" className="cursor-pointer h-18 ps-6">
        {sidebarActive ? (
          <NavLink to="/">
            <DynamicIcon src="/assets/Logo.png" styles="ps-6" />
          </NavLink>
        ) : (
          <FaBarsStaggered onClick={handleSidebar} />
        )}
      </Flex>

      {columns.map((column) => (
        <div key={column.id} className="column">
          {/* Optional: Show column title if it exists */}
          { column.title && (
            <div className="border-t-[#797A7C] mt-2  w-full border-t-2 border-l-4 border-amber-50 block pt-3 -ml-1 ps-7 font-medium text-[#797A7C] uppercase ">
              {sidebarActive && (<h3 className="text-black">{column.title}</h3>)}
              
            </div>
          )}

          <div className="links-container">
            {column.children.map((link) => (
              <SingleLink
                column={link}
                sidebarActive={sidebarActive}
                key={link.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
