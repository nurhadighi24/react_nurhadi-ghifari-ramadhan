import React from "react";
import { useState } from "react";

import FormTitle from "./FormTitle";
import { Input, Select, RadioInput } from "./Input/Input";
import Button from "../Button/Button";
import Table from "./Table/Table";

export default function Form() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [products, setProducts] = useState([]);
  const [nextId, setNextId] = useState(1);

  function handleChange(e) {
    const newValue = e.target.value;
    if (newValue.length >= 25) {
      alert("Last Name must not exceed 25 characters.");
    } else {
      setProductName(newValue);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (productName.length > 0) {
      const product = {
        id: nextId,
        productName: productName,
        productCategory: productCategory,
        productPrice: productPrice,
        selectedOption: selectedOption,
      };
      setNextId(nextId + 1);

      const dupeProducts = [...products, product];
      setProducts(dupeProducts);
      setProductCategory("");
      setProductName("");
      setProductPrice("");
      setSelectedOption("");
    } else {
      alert("Please enter a valid product name.");
    }
  }

  function handleDeteleClick(id) {
    const confirmDelete = window.confirm("Apakah kalian ingin menghapus?");

    if (confirmDelete) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    }
  }

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <form className="text-center mt-5" onSubmit={handleSubmit}>
        <FormTitle title="Detail Product" />
        <Input
          type="text"
          label="Product Name"
          value={productName}
          onChange={handleChange}
        />
        <Select
          label="Product Category"
          placeholder="Choose..."
          onChange={(e) => setProductCategory(e.target.value)}
          options={["Makanan", "Minuman", "Dessert"]}
          value={productCategory}
        />

        <p className="font-bold">Product Freshness</p>
        <RadioInput
          label="Brand New"
          name="options"
          value="Brand New"
          checked={selectedOption === "Brand New"}
          onChange={handleRadioChange}
        />
        <RadioInput
          label="Second Hand"
          name="options"
          value="Second Hand"
          checked={selectedOption === "Second Hand"}
          onChange={handleRadioChange}
        />
        <RadioInput
          label="Refurbished"
          name="options"
          value="Refurbished"
          checked={selectedOption === "Refurbished"}
          onChange={handleRadioChange}
        />

        <Input
          label="Product Price"
          type="number"
          placeholder="$1"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <Button type="submit" label="Submit" />
      </form>
      <Table
        headers={[
          "No",
          "Product Name",
          "Product Category",
          "Product Freshness",
          "Product Price",
          "Action",
        ]}
        datas={products.map((product, index) => ({
          id: product.id,
          productName: product.productName,
          productCategory: product.productCategory,
          selectedOption: product.selectedOption,
          productPrice: product.productPrice,
          no: index + 1,
        }))}
        onDeleteClick={(id) => handleDeteleClick(id)}
        onEditClick={() => {}}
      />
    </>
  );
}
