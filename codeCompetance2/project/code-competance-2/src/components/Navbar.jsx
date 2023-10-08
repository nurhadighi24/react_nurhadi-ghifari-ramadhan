import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between border-b-2 shadow-md p-3">
      <div>
        <a href="#" className=" font-bold">
          Nurhadi Logo
        </a>
      </div>
      <div className="">
        {[
          ["Home", "/"],
          ["About Us", "/aboutus"],
        ].map(([title, url]) => (
          <Link
            key={title}
            to={url}
            className="rounded-lg px-3 py-2 text-blue-700 font-medium hover:bg-blue-400 hover:text-white"
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
