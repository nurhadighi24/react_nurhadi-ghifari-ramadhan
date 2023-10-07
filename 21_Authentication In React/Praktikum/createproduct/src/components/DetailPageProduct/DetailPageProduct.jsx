import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../../utils/api/products/api";

export default function DetailPageProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailProducts(id);
      setProduct(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" text-center">
      {product ? (
        <>
          <h1>Detail Page {product.productName}</h1>
          <p>Product Name: {product.productName}</p>
          <p>Product Category: {product.productCategory}</p>
          <p>Product Freshness: {product.productFreshness}</p>
          <p>Product Price: {product.productPrice}</p>
          <p>Additional Description: {product.additionalDescription}</p>
          <p className=" font-bold border-4 p-3">
            Product Image:
            {product.image && (
              <img
                src={product.image}
                alt="Product"
                className=" block my-0 mx-auto max-w-5xl"
              />
            )}
          </p>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}
