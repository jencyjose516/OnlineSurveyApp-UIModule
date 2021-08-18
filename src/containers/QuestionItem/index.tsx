import { Button, Modal } from "components";
import { DeleteButton } from "components/Button/DeleteButton";
import { ItemCreationForm } from "containers/ItemCreationForm";
import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { v4 } from "uuid";
import { remove } from "lodash";
import { QuestionItemsProps } from "types/props";

export function QuestionItems(props: QuestionItemsProps) {
  const { items, setItems, setOpen, isOpen } = props;

  return (
    <>
      <div className="w-full space-y-5">
        <h3 className="text-xl font-bold">Questions</h3>

        {items.map((item, index) => (
          <div
            className="w-full bg-white rounded-lg shadow-sm p-5 flex flex-col space-y-5 md:flex-row md:space-x-5"
            key={v4()}
          >
            <div className="w-full space-y-5">
              <h3 className="font-bold text-xl">{item.question}</h3>
              <p className="font-light text-gray-500 overflow-ellipsis overflow-hidden">
                {item.description}
              </p>
              <p className="p-2 shadow-sm max-w-min rounded-full bg-purple-500 text-white text-xs whitespace-nowrap">
                {item.answerType.toUpperCase()}
              </p>
              {item.optionItems.length > 0 && (
                <>
                  <p className="font-bold text-gray-500">Options : </p>
                  <ul className="list-disc list-inside">
                    {item.optionItems.map((option) => (
                      <li className="text-gray-500" key={v4()}>
                        {option}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="border-t-2 border-purple-200 flex flex-col justify-center items-center py-5 md:border-t-0 md:border-l-2 md:px-5">
              <DeleteButton
                deleteAction={() => {
                  const updatedItems = remove(
                    items,
                    (i) => i.uniqueId !== item.uniqueId
                  );
                  setItems(updatedItems);
                }}
              >
                <FaTrash />
              </DeleteButton>
            </div>
          </div>
        ))}

        <Button
          type="button"
          variant="grayed"
          wFull
          onClick={() => {
            setOpen(true);
          }}
        >
          <FaPlus className="text-3xl" />
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        title="Create a question"
        onClose={() => {
          setOpen(false);
        }}
      >
        <ItemCreationForm
          onSubmit={(item) => {
            setItems((prevState) => {
              return [...prevState, item];
            });
            setOpen(false);
          }}
        />
      </Modal>
    </>
  );
}
