import React from "react";
import { useState, useEffect } from "react";

import FormTitle from "./FormTitle";
import { Input, Select, RadioInput } from "./Input/Input";
import Button from "../Button/Button";
import Table from "./Table/Table";

export default function Form() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setProducts(getProducts());
  }

  function getProducts() {
    const getItem = localStorage.getItem("products");

    if (getItem) {
      const parseProducts = JSON.parse(getItem);
      return parseProducts;
    }
    return [];
  }

  function isProductNameValid(name) {
    const regex = /^.{1,25}$/;
    return regex.test(name);
  }

  function isProductInputValid(choose) {
    const regex = /^.+$/;
    return regex.test(choose);
  }

  function handleSubmitPost(e) {
    e.preventDefault();
    if (!isProductNameValid(productName)) {
      alert(
        "Please enter a valid product name and Last Name must not exceed 25 characters."
      );
    } else if (!isProductInputValid(productCategory && productFreshness)) {
      alert("Please choose Product Category and Product Freshness!");
    } else if (!productImage) {
      alert("Choose Image Product!");
    } else {
      const product = {
        id: nextId,
        productName: productName,
        productCategory: productCategory,
        productPrice: productPrice,
        productFreshness: productFreshness,
        productImage: URL.createObjectURL(productImage),
      };
      setNextId(nextId + 1);

      const dupeProducts = [...products, product];
      setProducts(dupeProducts);
      localStorage.setItem("products", JSON.stringify(dupeProducts));
      setProductCategory("");
      setProductName("");
      setProductPrice("");
      setProductFreshness("");
      setProductImage(null);
    }
  }

  function handleDeteleClick(id) {
    const confirmDelete = confirm("Apakah kalian ingin menghapus?");

    if (confirmDelete) {
      const updatedProducts = products.filter((product) => product.id !== id);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    }
  }

  const handleRadioChange = (e) => {
    setProductFreshness(e.target.value);
  };

  return (
    <>
      <form className="text-center mt-5" onSubmit={handleSubmitPost}>
        <FormTitle title="Detail Product" />
        <Input
          type="text"
          label="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
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
          checked={productFreshness === "Brand New"}
          onChange={handleRadioChange}
        />
        <RadioInput
          label="Second Hand"
          name="options"
          value="Second Hand"
          checked={productFreshness === "Second Hand"}
          onChange={handleRadioChange}
        />
        <RadioInput
          label="Refurbished"
          name="options"
          value="Refurbished"
          checked={productFreshness === "Refurbished"}
          onChange={handleRadioChange}
        />

        <Input
          type="file"
          onChange={(e) => setProductImage(e.target.files[0])}
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
          "Product Image",
          "Action",
        ]}
        datas={products}
        onDeleteClick={(id) => handleDeteleClick(id)}
        onEditClick={() => {}}
      />
    </>
  );
}
