import { DatePicker, Input, Textarea } from "components";
import React from "react";
import { SurveyDetailsProps } from "types/props";

export function SurveyDetails(props: SurveyDetailsProps) {
  const {
    name,
    setName,
    description,
    setDescription,
    tags,
    setTags,
    startDate,
    setEndDate,
    endDate,
    setStartDate,
  } = props;

  return (
    <div className="space-y-5">
      <Input
        id="survey-name"
        isRequired
        label="Survey Name"
        placeholder="Survey Name"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <Textarea
        id="survey-description"
        isRequired
        label="Survey Description"
        placeholder="Survey Description"
        rows={5}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <Input
        id="survey-tags"
        isRequired
        label="Survey Tags"
        placeholder="Survey Tags"
        type="text"
        value={tags}
        onChange={(e) => {
          setTags(e.target.value);
        }}
      />

      <DatePicker
        id="startDate"
        label="Survey Start Date"
        placeholder="Survey Start Date"
        selectedDay={startDate}
        setSelectedDays={setStartDate}
      />
      <DatePicker
        id="endDate"
        label="Survey End Date"
        placeholder="Survey End Date"
        selectedDay={endDate}
        setSelectedDays={setEndDate}
      />
    </div>
  );
}
