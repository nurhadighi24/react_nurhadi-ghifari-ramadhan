import React from "react";
import { useParams } from "react-router-dom";

export default function DetailPageProduct() {
  const params = useParams();
  return (
    <>
      <div>
        <h1>Detail Page {params.id}</h1>
        <p>Product Name : {}</p>
      </div>
    </>
  );
}
