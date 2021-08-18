import { Error404, Loader } from "components";
import { Layout, SurveyResponseList } from "containers";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useFetchData } from "utils/hooks/useFetchData";

export function SurveyResponse() {
  const { data, error } = useFetchData<APISurvey[]>(
    "/surveyapp/survey/all",
    false
  );

  useEffect(() => {
    if (error) {
      toast.error("Unable to load data");
    }
  }, [error]);

  return (
    <Layout>
      <div className="p-5 lg:p-12">
        {(data?.length == 0 && (
          <Error404
            descripton="Please visit back later"
            header="We are sorry! We do not have any survey responses available to you"
          />
        )) ||
          ((data != null || data != undefined) && (
            <SurveyResponseList surveys={data} />
          )) || <Loader fullPage />}
      </div>
    </Layout>
  );
}
