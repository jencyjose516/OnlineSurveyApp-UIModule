import { Button } from "components";
import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useOutsideClick } from "utils/hooks";
import { createPortal } from "react-dom";
import { ModalProps } from "types/props";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

export function Modal(props: ModalProps) {
  const {
    children,
    isOpen,
    onClose,
    action,
    actionType = "primary",
    title,
    cancel,
  } = props;

  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const current = el.current;
    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperRef, onClose);

  if (isOpen)
    return createPortal(
      <div className="fixed z-10 left-0 top-0 w-screen h-screen bg-gray-900 bg-opacity-60 flex justify-center items-center m-0">
        <div
          className="bg-white p-5 max-w-xl w-full rounded-lg shadow-lg overflow-auto max-h-screen"
          ref={wrapperRef}
        >
          <div className="flex justify-between">
            <h2 className="text-2xl">{title}</h2>

            <Button variant="grayed" onClick={onClose}>
              <FaTimes />
            </Button>
          </div>
          <div className="py-5">{children}</div>
          {(cancel || action) && (
            <div className="flex flex-row-reverse border-t-2 border-purple-100 p-2">
              {cancel && (
                <Button variant="secondary" onClick={onClose}>
                  Cancel
                </Button>
              )}
              {action && (
                <Button variant={actionType} onClick={action}>
                  Edit
                </Button>
              )}
            </div>
          )}
        </div>
      </div>,
      el.current
    );

  return null;
}
