import { Loader } from "components/Loader";
import { Layout } from "containers/Layout";
import { UserDashBoardView } from "containers/UserDashBoardView";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useFetchData } from "utils/hooks/useFetchData";

export function UserDashBoard() {
  const { data, error } = useFetchData<APIUserAnalytics>(
    "/surveyapp/user/anylytics",
    true
  );

  useEffect(() => {
    if (error) {
      toast.error("Unable to load data");
    }
  }, [error]);
  return (
    <Layout>
      {data ? <UserDashBoardView data={data} /> : <Loader fullPage={true} />}
    </Layout>
  );
}
