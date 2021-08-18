import { DeleteButton } from "components/Button/DeleteButton";
import { truncate } from "lodash";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { DataCardProps } from "types/props";

export function DataCard(props: DataCardProps) {
  const { description, title, users, onClick, onDelete } = props;

  return (
    <div className="flex flex-col justify-between h-60 max-h-64 w-full max-w-sm bg-white shadow-lg rounded-lg p-5 space-y-3  border-4 border-white">
      <h2
        className="font-bold text-xl cursor-pointer hover:underline hover:text-purple-500"
        onClick={onClick}
      >
        {truncate(title, {
          length: 50,
        })}
      </h2>
      <p className="font-light text-gray-400 overflow-ellipsis overflow-hidden">
        {truncate(description, {
          length: 80,
        })}
      </p>

      <div className="inline-flex justify-between w-full">
        <div className="flex -space-x-2 justify-between overflow-hidden">
          {users &&
            users.map((user) => (
              <img
                alt={user.username}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-purple-500"
                key={user.uniqueId}
                src={user.image}
              />
            ))}
        </div>

        {onDelete && (
          <DeleteButton deleteAction={onDelete}>
            <FaTrash />
          </DeleteButton>
        )}
      </div>
    </div>
  );
}
