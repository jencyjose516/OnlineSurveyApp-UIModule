import React from "react";
import { SelectProps } from "types/props";

export function Select(props: SelectProps) {
  const {
    id,
    label,
    options,
    placeholder,
    isRequired,
    multiple,
    onChange,
    value,
  } = props;

  return (
    <div className="flex flex-col space-y-2 w-full">
      <label htmlFor={id}>
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-1 relative">
        <select
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm  py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          id={id}
          multiple={multiple}
          placeholder={placeholder}
          required={isRequired}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
