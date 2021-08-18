import React from "react";
import { TextareaProps } from "types/props";

export function Textarea(props: TextareaProps) {
  const {
    id,
    label,
    placeholder,
    isRequired,
    rows,
    autoComplete,
    onChange,
    value,
  } = props;

  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label htmlFor={id}>
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        autoComplete={autoComplete}
        className="p-2 border-2 border-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 "
        id={id}
        placeholder={placeholder}
        required={isRequired}
        rows={rows}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
