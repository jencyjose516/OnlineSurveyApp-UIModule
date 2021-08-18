import { Layout, SurveyForm } from "containers";
import React from "react";

export function CreateSurvey() {
  return (
    <Layout>
      <div className="p-5 lg:p-12">
        <SurveyForm />
      </div>
    </Layout>
  );
}
