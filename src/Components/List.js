import React from "react";

function List({ products, category, onDelete }) {
  const handleDelete = (productId) => {
    onDelete(productId);
  };

  return (
    <div>
      <h3>{category} Items</h3>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.productName} - {product.productId} - RS
            {product.productPrice}
            <button onClick={() => handleDelete(product.productId)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
