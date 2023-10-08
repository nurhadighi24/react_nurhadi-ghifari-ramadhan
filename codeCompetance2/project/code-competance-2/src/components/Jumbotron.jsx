import React from "react";

export default function Jumbotron() {
  return (
    <div className="flex items-center justify-center bg-cyan-950">
      <div>
        <h1 className=" text-cyan-50">Better Solutions For Your Business</h1>
        <p className=" text-gray-400">
          We are team of talented designers making websites with Bootstrap
        </p>
        <div className="flex gap-3">
          <a className=" bg-slate-950 text-white p-2 rounded-full hover:bg-gray-700 hover:text-stone-400">
            Get Started
          </a>
        </div>
      </div>
      <div>
        <img src="../src/public/assets/hero-img.png" alt="" />
      </div>
    </div>
  );
}
