import React from "react";

function Input({
  label,
  onChange,
  type,
  value,
  defaultValue,
  placeholder,
  style,
  register,
  name,
  error,
}) {
  return (
    <div className="flex flex-col my-4">
      <label>{label}</label>
      <input
        className="border-2 rounded-md p-3"
        type={type}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        style={style}
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

function TextArea({
  label,
  onChange,
  type,
  value,
  defaultValue,
  placeholder,
  style,
  register,
  name,
  error,
}) {
  return (
    <div className="flex flex-col my-4">
      <label>{label}</label>
      <textarea
        className="border-2 rounded-md p-3"
        type={type}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        style={style}
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

export { Input, TextArea };
