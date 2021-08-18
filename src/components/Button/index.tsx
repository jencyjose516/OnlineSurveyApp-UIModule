import React from "react";
import { ButtonProps } from "types/props";

export function Button(props: ButtonProps) {
  const { children, wFull, variant, disabled, onClick, type } = props;

  switch (variant) {
    case "primary":
      return (
        <button
          className={`flex justify-center items-center py-2 px-3 bg-purple-500 hover:bg-purple-600 rounded-lg shadow-sm text-white disabled:opacity-50 ${
            wFull && "w-full"
          }`}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "danger":
      return (
        <button
          className={`flex justify-center items-center py-2 px-3 bg-red-500 hover:bg-red-400 rounded-lg shadow-sm text-white disabled:opacity-50 ${
            wFull && "w-full"
          }`}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "grayed":
      return (
        <button
          className={`flex justify-center items-center py-2 px-3 bg-gray-200 hover:bg-gray-300 rounded-lg shadow-sm text-gray-500 hover:text-gray-700 disabled:opacity-50 ${
            wFull && "w-full"
          }`}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      );

    case "secondary":
      return (
        <button
          className={`flex justify-center items-center py-1 px-3 border-2 border-purple-500 hover:bg-purple-500 rounded-lg shadow-sm text-purple-500 hover:text-white disabled:opacity-50 ${
            wFull && "w-full"
          }`}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          className={`flex justify-center items-center py-2 px-3 bg-purple-500 hover:bg-purple-600 rounded-lg shadow-sm text-white disabled:opacity-50 ${
            wFull && "w-full"
          }`}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      );
  }
}
