import { Loader } from "components/Loader";
import { Modal } from "components/Modal";
import { DataCard } from "components/SurveyCard/DataCard";
import { Layout } from "containers/Layout";
import { ViewSurveyResponseItem } from "containers/ViewSurveyResponseItem";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "utils/hooks/useFetchData";

export function ViewSurveyResponse() {
  // const history = useHistory();
  const { surveyId } = useParams<{ surveyId: string }>();
  const [open, setOpen] = useState(false);

  const { data: surveyResList } = useFetchData<APISurveyResponse[]>(
    surveyId ? `/surveyapp/survey/getresponse?surveyId=${surveyId}` : null,
    false
  );

  return (
    <Layout>
      <div className="p-5 lg:p-12">
        <div className="w-full h-full flex">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {surveyResList &&
              surveyResList.map((surveyRes, index) => (
                <>
                  <DataCard
                    description={`Attended Questions : ${surveyRes.responses.length}`}
                    key={index}
                    title={"Response by " + surveyRes.user?.lastname}
                    onClick={() => setOpen(true)}
                  />

                  {open && (
                    <Modal
                      isOpen={open}
                      title="View Response"
                      onClose={() => {
                        setOpen(false);
                      }}
                    >
                      <ViewSurveyResponseItem
                        response={surveyRes.responses}
                        survey={surveyRes.survey}
                        user={surveyRes.user}
                      />
                    </Modal>
                  )}
                </>
              ))}
          </ul>
        </div>
      </div>
      {!surveyResList && <Loader fullPage />}
    </Layout>
  );
}
