import React from "react";
import { FaPoll } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export function Logo() {
  const history = useHistory();

  return (
    <div
      className="flex items-center justify-between space-x-2 font-bold text-2xl text-purple-700 cursor-pointer"
      onClick={() => {
        history.push("/web/");
      }}
    >
      <FaPoll />
      <h1 className="hidden md:block">Survey Forms</h1>
    </div>
  );
}
