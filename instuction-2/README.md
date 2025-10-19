Here's your updated code with the DELETE API call and filtering to show only non-deleted products:

```jsx
import axios from "axios";
import { useEffect, useState } from "react";
import TableComponent from "../../shared/table";
import { getColumns } from "../../../data/products.data";
import { Flex, Text } from "@radix-ui/themes";
import AddProduct from "./add.product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    price: "",
  });

  const handleNewProduct = async (values) => {
    try {
      const response = await axios.post("https://dummyjson.com/products/add", {
        title: values.title,
        category: values.category,
        price: parseFloat(values.price),
      });
      const newProductWithId = {
        ...response.data,
        id: Date.now(),
        isDeleted: false // Mark new products as not deleted
      };
      setProducts((prev) => [newProductWithId, ...prev]);
      setNewProduct({
        title: "",
        category: "",
        price: "",
      });
      console.log("Product added successfully:", response.data);
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  const handleEditProduct = (product) => {
    console.log("handleEditProduct calling...", product);
  }

  const handleProductDelete = async (product) => {
    try {
      // Call DELETE API
      const response = await axios.delete(`https://dummyjson.com/products/${product.id}`);
      
      // The API returns the deleted product with isDeleted: true
      const deletedProduct = response.data;
      console.log("Product deleted via API:", deletedProduct);
      
      // Update the product in local state to mark it as deleted
      setProducts(prevProducts =>
        prevProducts.map(item =>
          item.id === product.id 
            ? { ...item, isDeleted: true, deletedOn: new Date().toISOString() }
            : item
        )
      );
      
    } catch (error) {
      console.error("Failed to delete product via API:", error);
      // If API fails, still mark as deleted locally
      setProducts(prevProducts =>
        prevProducts.map(item =>
          item.id === product.id 
            ? { ...item, isDeleted: true, deletedOn: new Date().toISOString() }
            : item
        )
      );
    }
  };

  // Filter products to show only non-deleted ones
  const nonDeletedProducts = products.filter(product => !product.isDeleted);

  const columns = getColumns(handleProductDelete, handleEditProduct);
  
  useEffect(() => {
    const promise = axios.get("https://dummyjson.com/products");
    promise
      .then((res) => {
        // Add isDeleted: false to all initially loaded products
        const productsWithDeleteFlag = res.data.products.map(product => ({
          ...product,
          isDeleted: false
        }));
        setProducts(productsWithDeleteFlag);
      })
      .catch((error) => {
        console.error("Product Loading Failed!! : ", error.message);
      });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Flex
        width="100%"
        className="bg-amber-400 z-10"
        align="center"
        justify="between"
        px="9"
        py="3"
      >
        <Text className="">Total product: {nonDeletedProducts.length}</Text>
        <AddProduct handleNewProduct={handleNewProduct} />
      </Flex>

      <TableComponent rows={nonDeletedProducts} columns={columns}></TableComponent>
    </div>
  );
};

export default Products;
```

## Key Changes:

1. **Updated `handleProductDelete` function**:
   - Calls the DELETE API with axios
   - Updates the local product to mark it as deleted (`isDeleted: true`)
   - Adds `deletedOn` timestamp

2. **Added filtering**:
   - `nonDeletedProducts` filters out products where `isDeleted` is true
   - Table displays only `nonDeletedProducts`
   - Product count shows only non-deleted products

3. **Initial data setup**:
   - All products from API get `isDeleted: false` initially
   - Newly added products get `isDeleted: false`

## How it works:

- **DELETE API Call**: Uses `axios.delete()` to simulate deletion
- **Soft Delete**: Instead of removing from array, marks as `isDeleted: true`
- **Filtering**: Only shows products where `isDeleted` is false
- **API Response**: The dummyjson API returns the deleted product with `isDeleted: true` and `deletedOn` properties

Now when you delete a product:
1. It calls the DELETE API
2. Marks the product as deleted in local state
3. The product disappears from the table (filtered out)
4. The product count updates accordingly

This approach maintains the data while hiding deleted items, which is useful for potential undo functionality or audit purposes.