import React from "react";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { useSelector, useDispatch } from "react-redux";
import * as z from "zod";

import FormTitle from "./FormTitle";
import { Input, Select, RadioInput } from "./Input/Input";
import Button from "../Button/Button";
import Table from "./Table/Table";
import { setProducts } from "../../utils/redux/reducers/reducer";
import { deleteProduct } from "../../utils/redux/reducers/reducer";

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
  // const { products } = useSelector((state) => state.data);
  // const dispatch = useDispatch();

  const [productImage, setProductImage] = useState(null);
  const [nextId, setNextId] = useState(1);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handleSubmitProduct(data) {
    const product = {
      ...data,
      id: nextId,
      productImage: URL.createObjectURL(productImage),
    };

    setNextId(nextId + 1);

    // const dupeProducts = [...products, product];
    // dispatch(setProducts(dupeProducts));
    reset();
  }

  function handleDeteleClick(id) {
    const confirmDelete = confirm("Apakah kalian ingin menghapus?");

    if (confirmDelete) {
      // dispatch(deleteProduct(id));
    }
  }

  return (
    <>
      <form
        className="text-center mt-5 mx-40"
        onSubmit={handleSubmit(handleSubmitProduct)}
        aria-label="product-form"
      >
        <FormTitle title="Detail Product" />
        <Input
          register={register}
          ariaLabel="input-product-name"
          type="text"
          label="Product Name"
          name="productName"
          error={errors.productName?.message}
        />
        <Select
          register={register}
          ariaLabel="input-product-category"
          name="productCategory"
          label="Product Category"
          placeholder="Choose..."
          options={["Makanan", "Minuman", "Dessert"]}
          error={errors.productCategory?.message}
        />
        <p className="font-bold">Product Freshness</p>
        <RadioInput
          register={register}
          ariaLabel="input-product-freshness"
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
          ariaLabel="input-product-image"
          type="file"
          onChange={(e) => setProductImage(e.target.files[0])}
        />
        <Input
          register={register}
          ariaLabel="input-product-price"
          label="Product Price"
          type="number"
          name="productPrice"
          error={errors.productPrice?.message}
        />
        <Button type="submit" label="Submit" ariaLabel="btn-submit" />
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
        // datas={products}
        onDeleteClick={(id) => handleDeteleClick(id)}
        onEditClick={() => {}}
      />
    </>
  );
}
