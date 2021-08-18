import { Popup } from "components/Popup";
import React, { useState } from "react";
import { DeleteButtonProps } from "types/props";

export function DeleteButton(props: DeleteButtonProps) {
  const { children, wFull, disabled, deleteAction } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`flex justify-center items-center py-2 px-3 bg-red-500 hover:bg-red-400 rounded-lg shadow-sm text-white disabled:opacity-50 ${
          wFull && "w-full"
        }`}
        disabled={disabled}
        type="button"
        onClick={() => {
          setOpen(true);
        }}
      >
        {children}
      </button>

      {open && (
        <Popup
          action={async () => {
            await deleteAction();
            setOpen(false);
          }}
          actionName="Delete"
          actionType="danger"
          cancel
          isOpen={open}
          title="Delete Item"
          onClose={() => {
            setOpen(false);
          }}
        >
          Are you sure you want to delete this item?
        </Popup>
      )}
    </>
  );
}
