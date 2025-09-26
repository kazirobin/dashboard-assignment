import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../shared/table";

const Products = () => {
  const [columns, setColumns] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setColumns([
      {
        label: "Title",
        path: "title",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "Category",
        path: "category",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
    ]);
    const promise = axios.get("https://dummyjson.com/products");
    promise
      .then((res) => {
        setProducts(res.data.products);
        console.log(products);
      })
      .catch((error) => {
        console.error("Product Loading Failed!! : ", error.message);
      });
  }, []);
  console.log(products);
  console.log(columns);
  return (
    <>
      helo
      <Table rows={products} columns={columns}>
        <tr>
          <td colSpan={2}>its done</td>
        </tr>
      </Table>
    </>
  );
};

export default Products;
