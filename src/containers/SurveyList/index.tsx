import { Loader } from "components/Loader";
import { SurveyCard } from "components/SurveyCard";
import { authCtx } from "index";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { SurveyListProps } from "types/props";
import { setter } from "utils";

export function SurveyList(props: SurveyListProps) {
  const { state } = useContext(authCtx);
  const history = useHistory();
  const { surveys } = props;

  const [loading, setLoading] = useState(false);

  const handleDelete = async (uniqueId: string) => {
    try {
      setLoading(true);
      await setter("/surveyapp/survey/delete", { uniqueId }, state.token);
      await mutate("/surveyapp/survey/all");
      setLoading(false);
      toast.success("Survey deleted successfully!");
    } catch {
      toast.error("something went wrong trying to delete survey!");
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <li>
          <SurveyCard
            type="add"
            onClick={() => {
              history.push("/web/createSurvey");
            }}
          />
        </li>
        {surveys.map((survey) => (
          <li key={survey.uniqueId}>
            <SurveyCard
              description={survey.description}
              title={survey.name}
              type="data"
              users={[
                {
                  address: "",
                  email: "",
                  firstname: "",
                  image:
                    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  lastname: "",
                  phoneNumber: "",
                  uniqueId: "1",
                  username: "Non dolor qui",
                },
                {
                  address: "",
                  email: "",
                  firstname: "",
                  image:
                    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  lastname: "",
                  phoneNumber: "",
                  uniqueId: "2",
                  username: "Non dolor qui",
                },
              ]}
              onClick={() => {
                history.push(`/web/editSurvey/${survey.uniqueId}`);
              }}
              onDelete={() => {
                handleDelete(survey.uniqueId);
              }}
            />
          </li>
        ))}
      </ul>

      {loading && <Loader fullPage />}
    </div>
  );
}
