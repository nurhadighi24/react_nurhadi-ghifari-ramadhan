import React from "react";

function Input({
  type,
  label,
  placeholder,
  value,
  defaultValue,
  error,
  register,
  name,
}) {
  return (
    <div className=" flex flex-col">
      <label>{label}</label>
      <input
        className=" border-2 rounded"
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        {...(register ? register(name) : {})}
      />
      {error && (
        <label className="label">
          <span className="break-words text-sm font-light text-red-500">
            {error}
          </span>
        </label>
      )}
    </div>
  );
}

export default Input;
