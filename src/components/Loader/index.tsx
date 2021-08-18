import React from "react";
import { FaSpinner } from "react-icons/fa";
import { LoaderProps } from "types/props";

export function Loader(props: LoaderProps) {
  const { fullPage } = props;

  if (fullPage)
    return (
      <div className="fixed z-10 left-0 top-0 w-screen h-screen bg-gray-900 bg-opacity-60 flex justify-center items-center m-0">
        <FaSpinner className="animate-spin w-12 h-12 text-purple-300" />
      </div>
    );

  return (
    <div className="flex justify-center items-center w-full h-full">
      <FaSpinner className="animate-spin w-12 h-12 text-purple-500" />
    </div>
  );
}
