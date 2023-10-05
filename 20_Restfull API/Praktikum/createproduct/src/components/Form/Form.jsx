import React from "react";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import FormTitle from "./FormTitle";
import { Input, Select, RadioInput, TextArea } from "./Input/Input";
import Button from "../Button/Button";
import Table from "./Table/Table";

import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../../utils/api/products/api";

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
  const [selectedId, setSelectedId] = useState("");
  const [products, setProducts] = useState([]);

  const [productImage, setProductImage] = useState(null);

  const {
    reset,
    register,
    setValue,
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
      setProducts(result);
    } catch (error) {
      console.log(error.toString());
    }
  }

  async function onSubmit(data) {
    try {
      await createProduct(data);
      alert("Product berhasil ditambahkan");
      reset();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmitEdit(data) {
    try {
      await updateProduct({ ...data, id: selectedId });
      alert("Berhasil update product");
      setSelectedId("");
      reset();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickEdit(data) {
    setSelectedId(data.id);
    setValue("productName", data.productName);
    setValue("productCategory", data.productCategory);
    setValue("productFreshness", data.productFreshness);
    setValue("productPrice", data.productPrice);
    setValue("image", data.image);
    setValue("additionalDescription", data.additionalDescription);
  }

  async function handleDeteleClick(id_product) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus produk ini?"
    );
    if (confirmDelete) {
      try {
        await deleteProduct(id_product);
        alert("Product berhasil di hapus");
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <form
        className="text-center mt-5 mx-40"
        onSubmit={handleSubmit(selectedId == "" ? onSubmit : onSubmitEdit)}
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
          type="number"
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
        onEditClick={(data) => {
          handleClickEdit(data);
        }}
      />
    </>
  );
}
