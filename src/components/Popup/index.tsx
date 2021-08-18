import { Button } from "components";
import React, { useRef } from "react";
import { PopupProps } from "types/props";
import { useOutsideClick } from "utils/hooks";

export function Popup(props: PopupProps) {
  const {
    children,
    isOpen,
    onClose,
    action,
    actionType = "primary",
    actionName,
    title,
    cancel,
  } = props;

  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperRef, onClose);

  if (isOpen)
    return (
      <div className="fixed z-10 left-0 top-0 w-screen h-screen bg-gray-900 bg-opacity-60 flex justify-center items-center m-0">
        <div
          className="bg-white p-5 max-w-xl w-full rounded-lg shadow-lg overflow-auto max-h-lg"
          ref={wrapperRef}
        >
          <div className="flex justify-between">
            <h2 className="text-2xl">{title}</h2>
          </div>
          <div className="py-5">{children}</div>

          <div className="flex flex-row-reverse w-full border-t-2 border-purple-100 p-2">
            {cancel && (
              <div>
                <Button variant="grayed" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            )}
            {action && (
              <div className="mr-5">
                <Button variant={actionType} onClick={action}>
                  {actionName}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );

  return null;
}
