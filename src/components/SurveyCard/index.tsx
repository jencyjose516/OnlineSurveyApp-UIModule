import React from "react";
import { SurveyCardProps } from "types/props";
import { AddCard } from "./AddCard";
import { DataCard } from "./DataCard";

export function SurveyCard(props: SurveyCardProps) {
  const { type, onClick, ...rest } = props;

  if (type === "add") return <AddCard onClick={onClick} />;
  return <DataCard onClick={onClick} {...rest} />;
}
