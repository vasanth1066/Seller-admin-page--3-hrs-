import React, { useState } from "react";

function Forminput({ onAddProduct }) {
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      productName,

      productId,
      productPrice,
      category,
    };

    onAddProduct(newProduct);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Product ID: </label>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <label> Selling Price: </label>
        <input
          type="text"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <label> Product Name: </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <label> Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="electronic">Electronic</option>
          <option value="skincare">Skincare</option>
          <option value="food">Food</option>
        </select>
        <button type="submit"> Add Product </button>
      </form>
    </div>
  );
}

export default Forminput;
