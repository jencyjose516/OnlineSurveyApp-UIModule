import { Loader } from "components";
import { Layout, SurveyList } from "containers";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useFetchData } from "utils/hooks/useFetchData";

export function AdminSurvey() {
  const { data, error } = useFetchData<APISurvey[]>(
    "/surveyapp/survey/all/upcoming",
    true
  );

  useEffect(() => {
    if (error) {
      toast.error("Unable to load data");
    }
  }, [error]);

  return (
    <Layout>
      <div className="p-5 lg:p-12">
        {data ? <SurveyList surveys={data} /> : <Loader fullPage />}
      </div>
    </Layout>
  );
}
