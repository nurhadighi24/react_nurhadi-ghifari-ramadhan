import React from "react";

export default function RandomNumber() {
  const randomNumber = () => {
    console.log("Ini angka random nya:", Math.floor(Math.random() * 10));
  };
  return randomNumber();
}
