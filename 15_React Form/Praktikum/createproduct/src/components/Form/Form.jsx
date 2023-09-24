import React from "react";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import FormTitle from "./FormTitle";
import { Input, Select, RadioInput } from "./Input/Input";
import Button from "../Button/Button";
import Table from "./Table/Table";

const schema = z.object({
  productName: z
    .string()
    .min(1, { message: "Please enter a valid product name" })
    .max(25, { message: "Last name must not exceed 25 characters" }),
  productCategory: z
    .string()
    .min(1, { message: "Please select a product category" }),
  productFreshness: z
    .string()
    .min(1, { message: "Please select a product freshness" }),
  productPrice: z
    .string()
    .min(1, { message: "Product price is required" })
    .refine((value) => !Number.isNaN(parseInt(value)), {
      message: "Product price must be a number",
    }),
});

export default function Form() {
  const [productImage, setProductImage] = useState(null);
  const [products, setProducts] = useState([]);
  const [nextId, setNextId] = useState(1);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

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

  function handleSubmitProduct(data) {
    if (!productImage) {
      alert("Please select a product image");
    } else {
      const product = {
        ...data,
        id: nextId,
        productImage: URL.createObjectURL(productImage),
      };

      setNextId(nextId + 1);

      const dupeProducts = [...products, product];
      setProducts(dupeProducts);
      localStorage.setItem("products", JSON.stringify(dupeProducts));
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

  return (
    <>
      <form
        className="text-center mt-5"
        onSubmit={handleSubmit(handleSubmitProduct)}
      >
        <FormTitle title="Detail Product" />
        <Input
          register={register}
          type="text"
          label="Product Name"
          name="productName"
          error={errors.productName?.message}
        />
        <Select
          register={register}
          name="productCategory"
          label="Product Category"
          placeholder="Choose..."
          options={["Makanan", "Minuman", "Dessert"]}
          error={errors.productCategory?.message}
        />

        <p className="font-bold">Product Freshness</p>
        <RadioInput
          register={register}
          label="Brand New"
          value="Brand New"
          name="productFreshness"
        />
        <RadioInput
          register={register}
          label="Second Hand"
          value="Second Hand"
          name="productFreshness"
        />
        <RadioInput
          register={register}
          label="Refurbished"
          value="Refurbished"
          name="productFreshness"
        />
        {errors.productFreshness?.message}

        <Input
          label="Product Image"
          type="file"
          onChange={(e) => setProductImage(e.target.files[0])}
        />

        <Input
          register={register}
          label="Product Price"
          type="text"
          name="productPrice"
          error={errors.productPrice?.message}
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
