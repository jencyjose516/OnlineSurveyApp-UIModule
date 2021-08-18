import { Layout, SurveyForm } from "containers";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "utils/hooks/useFetchData";

export function EditSurvey() {
  const { surveyId } = useParams<{ surveyId: string }>();

  const { data } = useFetchData<APISurvey>(
    surveyId ? `/surveyapp/survey/get?surveyId=${surveyId}` : null,
    false
  );

  return (
    <Layout>
      <div className="p-5 lg:p-12">
        <SurveyForm data={data} />
      </div>
    </Layout>
  );
}
