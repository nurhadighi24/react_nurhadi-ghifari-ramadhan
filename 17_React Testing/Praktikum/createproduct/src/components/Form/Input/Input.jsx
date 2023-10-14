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
  ariaLabel,
}) {
  return (
    <div className="flex flex-col my-4">
      <label>{label}</label>
      <input
        className="border-2 rounded-md"
        type={type}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        style={style}
        aria-label={ariaLabel}
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

function Select({
  label,
  placeholder,
  value,
  onChange,
  options = [],
  register,
  name,
  error,
  ariaLabel,
}) {
  return (
    <div className="flex flex-col my-4">
      <label>{label}</label>
      <select
        className="border-2 rounded-md"
        onChange={onChange}
        value={value}
        aria-label={ariaLabel}
        {...(register ? register(name) : {})}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
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

function RadioInput({
  label,
  name,
  value,
  checked,
  onChange,
  register,
  error,
  ariaLabel,
}) {
  return (
    <div>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        aria-label={ariaLabel}
        {...(register ? register(name) : {})}
      />
      <label htmlFor={value}>{label}</label>
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

export { Input, Select, RadioInput };
