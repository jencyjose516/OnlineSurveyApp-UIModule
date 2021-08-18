import React from "react";
import { InputProps } from "types/props";

export function Input(props: InputProps) {
  const {
    id,
    label,
    maxLength,
    minLength,
    placeholder,
    isRequired,
    type,
    autoComplete,
    onBlur,
    onChange,
    onFocus,
    value,
    readOnly,
  } = props;

  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label htmlFor={id}>
          {label}
          {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        autoComplete={autoComplete}
        className="p-2 border-2 border-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 "
        id={id}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        readOnly={readOnly}
        required={isRequired}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />
    </div>
  );
}
