import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailPageProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) {
      const products = JSON.parse(savedProducts);
      const findProduct = products.find(
        (product) => product.id === parseInt(id)
      );

      if (findProduct) {
        setProduct(findProduct);
      } else {
        alert(`Product with ID ${id} not found.`);
      }
    }
  }, [id]);

  return (
    <div className=" text-center">
      <h1>Detail Page {id}</h1>
      {product ? (
        <>
          <p>Product Name: {product.productName}</p>
          <p>Product Category: {product.productCategory}</p>
          <p>Product Freshness: {product.productFreshness}</p>
          <p>Product Price: {product.productPrice}</p>
          <p className=" font-bold border-4 p-3">
            Product Image:
            {product.productImage && (
              <img
                src={product.productImage}
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
