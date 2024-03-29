import React, { useState, useEffect } from "react";
import Forminput from "./Components/Forminput";
import List from "./Components/List";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );

    if (allProducts.length > 0) {
      setProducts(allProducts);
    }
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);

    localStorage.setItem(newProduct.productId, JSON.stringify(newProduct));
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem(productId, JSON.stringify(updatedProducts));
  };

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <div>
      <Forminput onAddProduct={handleAddProduct} />
      <div>
        <h2>Products</h2>
        <List
          products={getProductsByCategory("electronic")}
          category="Electronic"
          onDelete={handleDeleteProduct}
        />
        <List
          products={getProductsByCategory("skincare")}
          category="Skincare"
          onDelete={handleDeleteProduct}
        />
        <List
          products={getProductsByCategory("food")}
          category="Food"
          onDelete={handleDeleteProduct}
        />
      </div>
    </div>
  );
}

export default App;
