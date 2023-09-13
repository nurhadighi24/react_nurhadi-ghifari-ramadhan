import RandomNumber from "../../utils/RandomNumber";

import React from "react";

export default function Button({ label, type, onClick }) {
  return (
    <div className="flex justify-center mt-5">
      <button
        className="p-2 bg-blue-600 rounded-full text-white"
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
