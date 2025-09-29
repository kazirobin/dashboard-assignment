import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FaBoxesPacking } from "react-icons/fa6";
const Sidebar = () => {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    setColumns([
      {
        id:1,
        label: "Products",
        icon:<FaBoxesPacking />,
        path:"products",
        content: (column) => {
          return <NavLink to={column.path} className={({isActive}) => {return isActive?"text-amber-950 bg-amber-200" :"" }}>{column.icon}  {column.label}</NavLink>;
        },
      },
      {
        id:2,
        label: "Users",
        icon:<FaBoxesPacking />,
        path:"users",
        content: (column) => {
          return  <NavLink to={column.path} className={({isActive}) => {return isActive?"text-amber-950 bg-amber-200" :"" }}>{column.icon}  {column.label}</NavLink>;
        },
      },
    ]);
  }, []);
  return (
    <div className="bg-pink-500">
   
      {columns.map((column) => (
        <div key={column.id}>
     
          {column.content(column)}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
