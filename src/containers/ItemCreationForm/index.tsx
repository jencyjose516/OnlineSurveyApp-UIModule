import { Button, Input, Select, Textarea } from "components";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { ItemCreationFormProps } from "types/props";
import { options } from "./constants";

export function ItemCreationForm(props: ItemCreationFormProps) {
  const { onSubmit } = props;

  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [answerType, setAnswerType] = useState<AnswerType>("");
  const [optionItems, setOptionItems] = useState<string[]>([]);

  useEffect(() => {
    if (
      answerType === "Multi Select Options" ||
      answerType === "Single Select Option"
    ) {
      setOptionItems((prevState) => {
        if (prevState.length > 0) return prevState;
        return [""];
      });
    } else {
      setOptionItems([]);
    }
  }, [answerType]);

  return (
    <form
      className="w-full space-y-5 flex flex-col justify-center items-center"
      onReset={(e) => {
        e.preventDefault();
      }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        id="question"
        isRequired
        label="Question"
        placeholder="Question"
        type="text"
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />

      <Textarea
        id="description"
        isRequired
        label="Description"
        placeholder="Description"
        rows={5}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <Select
        id="answerType"
        isRequired
        label="Select Answer Type"
        options={options}
        placeholder="Select Answer Type"
        value={answerType}
        onChange={(e) => {
          setAnswerType(e.target.value as AnswerType);
        }}
      />

      {(answerType === "Multi Select Options" ||
        answerType === "Single Select Option") && (
        <div className="w-full space-y-5">
          {optionItems.map((item, index) => {
            return (
              <Input
                id={`option${index + 1}`}
                isRequired
                key={index + 1}
                label={`Option ${index + 1}`}
                placeholder={`Enter option ${index + 1}`}
                type="text"
                value={item}
                onChange={(e) => {
                  setOptionItems((prevState) => {
                    const value = e.target.value;

                    const state = [...prevState];
                    state[index] = value;

                    return [...state];
                  });
                }}
              />
            );
          })}

          <Button
            type="button"
            variant="grayed"
            wFull
            onClick={() => {
              setOptionItems((prevState) => [...prevState, ""]);
            }}
          >
            <FaPlus />
          </Button>
        </div>
      )}

      <hr className="border-2 border-purple-200 w-full" />

      <div className="w-full flex space-x-5">
        <Button
          type="button"
          variant="primary"
          onClick={() => {
            onSubmit({
              answerType,
              description,
              optionItems,
              question,
            });
          }}
        >
          Create Item
        </Button>
        <Button
          type="button"
          variant="grayed"
          onClick={() => {
            setQuestion("");
            setDescription("");
            setAnswerType("");
            setOptionItems([""]);
          }}
        >
          Clear form
        </Button>
      </div>
    </form>
  );
}
