import React from "react";

function Input({
  label,
  onChange,
  type,
  value,
  defaultValue,
  placeholder,
  style,
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
      />
    </div>
  );
}

function Select({ label, placeholder, value, onChange, options = [] }) {
  return (
    <div className="flex flex-col my-4">
      <label>{label}</label>
      <select className="border-2 rounded-md" onChange={onChange} value={value}>
        <option>{placeholder}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function RadioInput({ label, name, value, checked, onChange }) {
  return (
    <div>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}

export { Input, Select, RadioInput };
