import React, { useEffect, useState } from "react";

import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

export default function Table({
  headers = [],
  datas = [],
  onDeleteClick,
  onEditClick,
}) {
  const navigate = useNavigate();
  return (
    <table className="table-fixed w-full mt-5">
      <thead className="">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="border-4 border-red-500">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-center">
        {datas.map((data, index) => (
          <tr key={data.id} className="">
            <td
              className="border-4 border-sky-500"
              onClick={() => navigate(`/create-product/${data.id}`)}
            >
              {index + 1}
            </td>
            <td className="border-4 border-sky-500">{data.productName}</td>
            <td className="border-4 border-sky-500">{data.productCategory}</td>
            <td className="border-4 border-sky-500">{data.selectedOption}</td>
            <td className="border-4 border-sky-500">{data.productPrice}</td>
            <td className="flex justify-center gap-3">
              <Button
                label="Delete"
                backgroundColor="red"
                onClick={() => onDeleteClick(data.id)}
              />
              <Button
                label="Edit"
                backgroundColor="green"
                onClick={onEditClick}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
