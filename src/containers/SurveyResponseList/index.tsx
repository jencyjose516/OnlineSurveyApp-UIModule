import { Loader } from "components/Loader";
import { SurveyCard } from "components/SurveyCard";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SurveyListProps } from "types/props";

export function SurveyResponseList(props: SurveyListProps) {
  const history = useHistory();
  const { surveys } = props;

  const [loading] = useState(false);

  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {surveys.map((survey) => (
          <li key={survey.uniqueId}>
            <SurveyCard
              description={survey.description}
              title={survey.name}
              type="data"
              onClick={() => {
                history.push(`/web/viewresponse/${survey.uniqueId}`);
              }}
            />
          </li>
        ))}
      </ul>

      {loading && <Loader fullPage />}
    </>
  );
}
