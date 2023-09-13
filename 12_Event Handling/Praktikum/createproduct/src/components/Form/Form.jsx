import React from "react";
import { useState } from "react";

import FormTitle from "./FormTitle";
import Input from "./Input/Input";
import Button from "../Button/Button";

export default function Form() {
  const [productName, setProductName] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    if (newValue.length >= 25) {
      alert("Last Name must not exceed 25 characters.");
    } else {
      setProductName(newValue);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (productName.length > 0) {
      alert(`Berhasil menambahkan product\nNama Produk: ${productName}`);
    } else {
      alert("Please enter a valid product name.");
    }
  }

  return (
    <>
      <form className="text-center mt-5" onSubmit={handleSubmit}>
        <FormTitle title="Detail Product" />
        <Input
          type="text"
          label="Product Name"
          defaultValue={productName}
          onChange={handleChange}
        />
        <Button type="submit" label="Submit" />
      </form>
    </>
  );
}
