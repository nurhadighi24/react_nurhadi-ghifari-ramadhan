import React from "react";

export default function Header() {
  return (
    <nav className="flex justify-between border-b-2 shadow-md p-3">
      <div>
        <a href="#" className="font-bold">
          Simple Header
        </a>
      </div>
      <div className="">
        {[
          ["Home", "/dashboard"],
          ["Features", "/features"],
          ["Pricing", "/pricing"],
          ["FAQs", "/faqs"],
          ["About", "/about"],
        ].map(([title, url]) => (
          <a
            key={title}
            href={url}
            className="rounded-lg px-3 py-2 text-blue-700 font-medium hover:bg-blue-400 hover:text-white"
          >
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
}
