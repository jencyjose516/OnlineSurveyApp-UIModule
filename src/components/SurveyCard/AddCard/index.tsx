import React from "react";
import { FaPlus } from "react-icons/fa";
import { AddCardProps } from "types/props";

export function AddCard(props: AddCardProps) {
  const { onClick } = props;

  return (
    <div
      className="h-60 w-full max-w-sm border-gray-300 border-dashed border-4 rounded-lg p-5 text-gray-300 space-y-3 cursor-pointer flex justify-center items-center hover:text-gray-500 hover:border-gray-500"
      onClick={onClick}
    >
      <FaPlus className="h-40 w-40 " />
    </div>
  );
}
