import React from "react";

export default function Button({ label, onClick, type }) {
  return (
    <div className=" text-center pt-3">
      <button
        className="rounded-full bg-slate-800 px-3 py-2 text-white"
        onClick={onClick}
        type={type}
      >
        {label}
      </button>
    </div>
  );
}
