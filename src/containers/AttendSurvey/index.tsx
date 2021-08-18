import { Button } from "components/Button";
import { CheckBoxInput } from "components/CheckBoxInput";
import { Input } from "components/Input";
import { RadioInput } from "components/RadioInput";
import { StarInput } from "components/StarInput";
import { Textarea } from "components/Textarea";
import React, { useState } from "react";
import { AttendSurveyProps } from "types/props";

export function AttendSurvey(props: AttendSurveyProps) {
  const { survey, submitAction } = props;
  const [response, setResponse] = useState(
    new Map<string, APISurveyQuestionResponse>()
  );

  const [checkValues, setCheckValues] = useState(
    new Map<string, { checked: boolean; value: string }>()
  );

  const handleChange = (e: any, item: APIQuestionItem) => {
    const singleAnswer = e.target.value;

    const values = response;
    const answerType = item.answerType;
    const questionId = item.uniqueId;
    if (e.target.type == "checkbox") {
      const checkedValueMap = checkValues;
      if (!e.target.checked && checkedValueMap.has(questionId + singleAnswer)) {
        checkedValueMap.delete(questionId + singleAnswer);
      } else {
        checkedValueMap.set(questionId + singleAnswer, {
          checked: true,
          value: e.target.value,
        });
      }
      setCheckValues(checkedValueMap);
      const multipleAnswer: string[] = [];
      checkValues.forEach((checkedItem, key) => {
        if (key.startsWith(questionId)) {
          multipleAnswer.push(checkedItem.value);
        }
      });
      values.set(questionId, {
        answerType,
        multipleAnswer,
        questionId,
      });
    } else {
      values.set(questionId, {
        answerType,
        questionId,
        singleAnswer,
      });
    }
    setResponse(values);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitAction(Array.from(response.values()));
        }}
      >
        <div className="p-2 sm:p-12 md:24">
          <h1 className="flex justify-center pb-2">
            <p className="text-3xl subpixel-antialiased font-semibold tracking-wide leading-9 uppercase break-words">
              {survey?.name}
            </p>
          </h1>
          <div className="pb-5 border-t-2 border-light-blue-100"></div>

          <ul>
            {survey?.items.map((item, index) => (
              <li key={item.uniqueId}>
                <div className="py-3">
                  <div>
                    <p className="text-1xl subpixel-antialiased font-semibold tracking-wide leading-9 break-words">
                      {"(" + (index + 1) + ") " + item.question}
                    </p>
                  </div>
                  <div className="pl-3">
                    {item.answerType === "Single Line Text" && (
                      <Input
                        id={item.uniqueId}
                        isRequired
                        type="text"
                        value={response.get(item.uniqueId)?.singleAnswer}
                        onChange={(e) => {
                          handleChange(e, item);
                        }}
                      ></Input>
                    )}
                    {item.answerType === "Multi Line Text" && (
                      <Textarea
                        id={item.uniqueId}
                        isRequired
                        rows={3}
                        value={response.get(item.uniqueId)?.singleAnswer}
                        onChange={(e) => {
                          handleChange(e, item);
                        }}
                      ></Textarea>
                    )}
                    {item.answerType === "Single Select Option" && (
                      <>
                        {item.optionItems.map((option, index) => (
                          <div className="flex flex-col" key={index}>
                            <RadioInput
                              id={index + ""}
                              label={option}
                              name="singlesel"
                              type="radio"
                              value={
                                response.get(item.uniqueId)
                                  ? response.get(item.uniqueId)?.singleAnswer
                                  : option
                              }
                              onChange={(e) => {
                                handleChange(e, item);
                              }}
                            />
                          </div>
                        ))}
                      </>
                    )}
                    {item.answerType === "Multi Select Options" && (
                      <>
                        {item.optionItems.map((option, index) => (
                          <div className="flex flex-col" key={index}>
                            <CheckBoxInput
                              checked={
                                checkValues.get(item.uniqueId + option)?.checked
                              }
                              id={index + ""}
                              label={option}
                              name="singlesel1"
                              type="checkbox"
                              value={option}
                              onChange={(e) => {
                                handleChange(e, item);
                              }}
                            />
                          </div>
                        ))}
                      </>
                    )}
                    {item.answerType === "Rating (5)" && (
                      <>
                        <StarInput
                          name="star"
                          size={5}
                          onChange={(e) => {
                            handleChange(e, item);
                          }}
                        />
                      </>
                    )}
                    {item.answerType === "Rating (10)" && (
                      <>
                        <StarInput
                          name="star1"
                          size={10}
                          onChange={(e) => {
                            handleChange(e, item);
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Button type="submit" variant="primary">
            Submit Response
          </Button>
        </div>
      </form>
    </>
  );
}
