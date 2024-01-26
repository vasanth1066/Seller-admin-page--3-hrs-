import React, { useState } from "react";
function Input() {
  const [id, setid] = useState("");
  const [price, setprice] = useState("");
  const [pname, setpname] = useState("");
  const [category, setcategory] = useState("");
  let myobj = {
    id,
    price,
    pname,
    category,
  };

  function onclickHandler(e) {
    e.preventDefault();
    console.log(myobj);
    localStorage.setItem(id, JSON.stringify(myobj));
  }
  return (
    <div>
      <form>
        <lable>Product ID:</lable>
        <input
          type="number"
          value={id}
          onChange={(e) => {
            setid(e.target.value);
          }}
        ></input>
        <lable>Selling Price:</lable>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
          }}
        ></input>
        <lable>Product Name:</lable>
        <input
          type="text"
          value={pname}
          onChange={(e) => {
            setpname(e.target.value);
          }}
        ></input>
        <lable>Choose category:</lable>
        <select
          value={category}
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        >
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="SkinCare">SkinCare</option>
        </select>
        <button onClick={onclickHandler}>Add Product</button>
      </form>
    </div>
  );
}

export default Input;
