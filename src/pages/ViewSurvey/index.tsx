import { Loader } from "components/Loader";
import { AttendSurvey } from "containers/AttendSurvey";
import { Layout } from "containers/Layout";
import { authCtx } from "index";
import React from "react";
import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useFetchData } from "utils/hooks/useFetchData";
import { setter } from "utils/setter";

export function ViewSurvey() {
  const history = useHistory();
  const { state } = useContext(authCtx);
  const { surveyId } = useParams<{ surveyId: string }>();

  const { data: survey } = useFetchData<APISurvey>(
    surveyId ? `/surveyapp/survey/get?surveyId=${surveyId}` : null,
    false
  );

  const { data: user } = useFetchData<User>(
    "/surveyapp/user/profile/get",
    false
  );

  const handleSubmit = async (surveyResponse: APISurveyQuestionResponse[]) => {
    try {
      const surveyResult = await setter<APISurveyResponse>(
        "/surveyapp/user/survey/submit",
        {
          responses: surveyResponse,
          surveyId: survey?.uniqueId,
          userId: user?.uniqueId,
        },
        state.token
      );
      console.log(surveyResult);
      toast.success("completed");
      history.push("/web/");
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <Layout>
      <div className="p-5 lg:p-12">
        {survey && user ? (
          <AttendSurvey submitAction={handleSubmit} survey={survey} />
        ) : (
          <Loader fullPage />
        )}
      </div>
    </Layout>
  );
}
