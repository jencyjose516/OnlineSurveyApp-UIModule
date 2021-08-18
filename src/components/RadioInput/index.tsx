import React from "react";
import { RadioInputProps } from "types/props";

export function RadioInput(props: RadioInputProps) {
  const { value, name, label, id, type, onChange } = props;
  return (
    <>
      <label className="inline-flex items-center mt-3">
        <input
          className="form-radio h-5 w-5 text-gray-600"
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    </>
  );
}
