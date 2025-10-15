import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../../shared/table";
import { getColumns } from "../../../data/products.data";
import { Button, Dialog, Flex, Heading, Text } from "@radix-ui/themes";
import { BiPlus } from "react-icons/bi";

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
    <Flex align="center" justify="between" px="9" py="3">
            Total product: {products.length}
<Dialog.Root>
  <Dialog.Trigger>
<Button><Text className="cursor-pointer flex items-center gap-1"><BiPlus/> Add Product</Text></Button>
  </Dialog.Trigger>
 
    <Dialog.Content>
      <Dialog.Title>Add a Product</Dialog.Title>
    </Dialog.Content>

</Dialog.Root>

    </Flex>
      <TableComponent rows={products} columns={columns}>
        <tr>
          <td colSpan={columns.length} className="border">
          </td>
        </tr>
      </TableComponent>
    </>
  );
};

export default Products;
