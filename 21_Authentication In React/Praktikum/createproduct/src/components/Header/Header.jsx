import React from "react";
import { Link } from "react-router-dom";
import { useToken } from "../../utils/states/token-context";

export default function Header() {
  const { token, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    alert("Berhasil Logout!");
  }
  return (
    <nav className="flex justify-between border-b-2 shadow-md p-3">
      <div>
        <a href="#" className="font-bold">
          Simple Header
        </a>
      </div>
      <div className="">
        {[
          ["Home", "/"],
          ["Products", "/products"],
          ["Login", "/login"],
        ].map(([title, url]) => (
          <Link
            key={title}
            to={url}
            className="rounded-lg px-3 py-2 text-blue-700 font-medium hover:bg-blue-400 hover:text-white"
          >
            {title}
          </Link>
        ))}
        <p
          className="cursor-pointer inline rounded-lg px-3 py-2 text-blue-700 font-medium hover:bg-blue-400 hover:text-white"
          onClick={() => handleLogout()}
        >
          Logout
        </p>
      </div>
    </nav>
  );
}
