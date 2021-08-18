import React from "react";
import { StarInputProps } from "types/props";
import "./index.css";

export function StarInput(props: StarInputProps) {
  const { name, onChange, size } = props;

  return (
    <>
      {
        <div className="flex">
          {" "}
          <div className="rating">
            {Array(size)
              .fill(0)
              .map((_, index) => (
                <label key={index + 1} style={{ zIndex: size - index }}>
                  <input
                    id={index + 1 + ""}
                    name={name + "radio1"}
                    type="radio"
                    value={index + 1}
                    onChange={onChange}
                  />
                  {Array(index + 1)
                    .fill(0)
                    .map((_, innerIndex) => (
                      <span className="icon" key={innerIndex + 1}>
                        ★
                      </span>
                    ))}
                </label>
              ))}
          </div>
        </div>
      }
    </>
  );
}
