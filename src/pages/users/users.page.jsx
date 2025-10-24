import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../../components/common/table";

const Users = () => {
  const [columns, setColumns] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setColumns([
      {
        label: "Name",
        path: "firstName",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "Age",
        path: "age",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "Gender",
        path: "gender",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
    ]);
    const promise = axios.get("https://dummyjson.com/users");
    promise
      .then((res) => {
        setUsers(res.data.users);
        console.log(users);
      })
      .catch((error) => {
        console.error("Product Loading Failed!! : ", error.message);
      });
  }, []);
  console.log(users);
  console.log(columns);
  return (
    <>
      <TableComponent rows={users} columns={columns}>
        <tr>
          <td colSpan={2}>its done</td>
        </tr>
      </TableComponent>
    </>
  );
};

export default Users;
