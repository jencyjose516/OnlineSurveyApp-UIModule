import { Error404, Loader } from "components";
import { Layout, UserSurveyList } from "containers";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useFetchData } from "utils/hooks/useFetchData";

export function UserSurvey() {
  const { data, error } = useFetchData<APISurvey[]>(
    "/surveyapp/survey/all/active",
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
        {(data?.length == 0 && (
          <Error404
            descripton="Please visit back later to complete some of the exiting surveys"
            header="We are sorry! We do not have an open survey available to you"
          />
        )) ||
          ((data != null || data != undefined) && (
            <UserSurveyList surveys={data} />
          )) || <Loader fullPage />}
      </div>
    </Layout>
  );
}
