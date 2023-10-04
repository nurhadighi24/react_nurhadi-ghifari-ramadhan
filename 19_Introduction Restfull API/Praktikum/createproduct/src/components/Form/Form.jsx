import React from "react";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import * as z from "zod";
import { v4 as uuidv4 } from "uuid";

import FormTitle from "./FormTitle";
import { Input, Select, RadioInput, TextArea } from "./Input/Input";
import Button from "../Button/Button";
import Table from "./Table/Table";
import { setProducts } from "../../utils/redux/reducers/reducer";
import { deleteProduct } from "../../utils/redux/reducers/reducer";
import { getProducts } from "../../utils/api/products/api";

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
  additionalDescription: z
    .string()
    .min(1, { message: "Please enter a valid additional description" }),
});

export default function Form() {
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [productImage, setProductImage] = useState(null);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      productFreshness: "",
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProducts();
      dispatch(setProducts(result));
    } catch (error) {
      console.log(error.toString());
    }
  }

  function handleSubmitProduct(data) {
    if (!productImage) {
      alert("please input product image!");
    } else {
      const newData = {
        id: uuidv4(),
        ...data,
        image: URL.createObjectURL(productImage),
      };
      const dupeArr = [...products, newData];

      dispatch(setProducts(dupeArr));
      reset();
    }
  }

  function handleDeteleClick(id) {
    const confirmDelete = confirm("Apakah kalian ingin menghapus?");

    if (confirmDelete) {
      dispatch(deleteProduct(id));
    }
  }

  return (
    <>
      <form
        className="text-center mt-5 mx-40"
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
          options={["Electronics", "Furniture", "Appliance"]}
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
        <TextArea
          register={register}
          label="Additional Description"
          name="additionalDescription"
          error={errors.additionalDescription?.message}
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
          "Additional Description",
          "Action",
        ]}
        datas={products}
        onDeleteClick={(id) => handleDeteleClick(id)}
        onEditClick={() => {}}
      />
    </>
  );
}
