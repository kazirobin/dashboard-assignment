import axios from "axios";
import React, { useEffect, useState } from "react";
import TableComponent from "../../shared/table";

const Products = () => {
  const [columns, setColumns] = useState([]);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const handleProduct = (product) => {
    setProducts(prevProducts => prevProducts.filter(item => item.id !== product.id))
    console.log(products)
  };
    setColumns([
      {
        label: "Title",
        path: "title",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "Images",
        path: "images",
        content: (row, column) => (
          <img src={row[column.path][0]} alt="" srcset="" className="w-15" />
        ),
      },
      {
        label: "Category",
        path: "category",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "Price",
        path: "price",
        content: (row, column) => <span>{row[column.path]}</span>,
      },
      {
        label: "",
        path: "price",
        content: (row, column) => <button onClick={() => { handleProduct(row) }} className="border px-2">Delete</button>,
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
      <TableComponent rows={products} columns={columns}>
        <tr>
          <td colSpan={columns.length} className="border">
           Total product: {products.length}
          </td>
        </tr>
      </TableComponent>
    </>
  );
};

export default Products;
