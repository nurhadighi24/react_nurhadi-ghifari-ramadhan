import React from "react";

export default function Input({
  label,
  onChange,
  type,
  value,
  defaultValue,
  placeholder,
}) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        className="border-2 rounded-md"
        type={type}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
}
