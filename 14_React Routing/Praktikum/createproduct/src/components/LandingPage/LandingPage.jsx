import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

export default function LandingPage() {
  return (
    <>
      <div className="flex items-center justify-center bg-cyan-950">
        <div>
          <h1 className=" text-cyan-50">Better Solutions For Your Business</h1>
          <p className=" text-gray-400">
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="flex gap-3">
            <Link
              to="/create-product"
              className=" bg-slate-950 text-white p-2 rounded-full hover:bg-gray-700 hover:text-stone-400"
            >
              Create Product
            </Link>
          </div>
        </div>
        <div>
          <img src="../src/assets/hero-img.png" alt="" />
        </div>
      </div>
    </>
  );
}
