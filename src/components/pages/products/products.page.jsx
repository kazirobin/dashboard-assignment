import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../../shared/table";
import { getColumns } from "../../../data/products.data";

const Products = () => {
  const [products, setProducts] = useState([]);
  const handleProduct = (product) => {
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id)
    );
    console.log(products);
  };
  const columns = getColumns(handleProduct);
  useEffect(() => {
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
