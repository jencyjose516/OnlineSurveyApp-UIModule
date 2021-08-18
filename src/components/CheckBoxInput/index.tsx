import React from "react";
import { CheckBoxInputProps } from "types/props";

export function CheckBoxInput(props: CheckBoxInputProps) {
  const { value, name, label, id, type, checked, onChange } = props;
  return (
    <>
      <label className="inline-flex items-center mt-3">
        <input
          checked={checked}
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
