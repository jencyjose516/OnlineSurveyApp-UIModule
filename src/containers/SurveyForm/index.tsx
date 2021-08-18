import { Button, Loader } from "components";
import { QuestionItems, SurveyDetails } from "containers";
import { formatISO } from "date-fns";
import { authCtx } from "index";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { SurveyFormProps } from "types/props";
import { setter } from "utils";
import { useSurvey } from "utils/hooks";

export function SurveyForm(props: SurveyFormProps) {
  const { state } = useContext(authCtx);
  const history = useHistory();
  const { data } = props;

  const {
    description,
    items,
    name,
    startDate,
    endDate,
    setEndDate,
    setDescription,
    setName,
    setStartDate,
    setTags,
    tags,
    isOpen,
    setItems,
    setOpen,
    loading,
    setLoading,
  } = useSurvey(data);

  return (
    <>
      {loading && <Loader fullPage />}
      <form
        className="flex flex-col space-y-5"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);

          const surveyStartDate = formatISO(startDate, {
            representation: "date",
          });

          const expiryDate = formatISO(endDate, {
            representation: "date",
          });

          if (expiryDate > surveyStartDate) {
            try {
              if (data) {
                await setter<any>(
                  "/surveyapp/survey/update",
                  {
                    description,
                    expiryDate,
                    items,
                    name,
                    startDate: surveyStartDate,
                    tags,
                    uniqueId: data?.uniqueId,
                  },
                  state.token
                );
              } else {
                await setter<any>(
                  "/surveyapp/survey/create",
                  {
                    description,
                    expiryDate,
                    items,
                    name,
                    startDate: surveyStartDate,
                    tags,
                  },
                  state.token
                );
              }

              toast.success(
                `Survey ${data ? "updated" : "create"} successfully!!`
              );

              setTimeout(() => {
                setLoading(false);
                history.push("/web/");
              }, 1000);
            } catch {
              toast.error(
                `Something went wrong trying to ${
                  data ? "updated" : "create"
                } survey!`
              );
              setLoading(false);
            }
          } else {
            toast.error("End date should be higher than start date");
            setLoading(false);
          }
        }}
      >
        <h2 className="text-3xl font-bold">
          {data ? "Update Survey" : "Create Survey"}
        </h2>

        <SurveyDetails
          description={description}
          endDate={endDate}
          name={name}
          setDescription={setDescription}
          setEndDate={setEndDate}
          setName={setName}
          setStartDate={setStartDate}
          setTags={setTags}
          startDate={startDate}
          tags={tags}
        />

        <QuestionItems
          isOpen={isOpen}
          items={items}
          setItems={setItems}
          setOpen={setOpen}
        />

        <div className="mt-5 w-full">
          <Button disabled={loading} type="submit" variant="primary" wFull>
            {data ? "Update Survey" : "Create Survey"}
          </Button>
        </div>
      </form>
    </>
  );
}
