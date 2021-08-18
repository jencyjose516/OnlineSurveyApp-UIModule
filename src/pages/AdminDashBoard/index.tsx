import { Loader } from "components/Loader";
import { AdminDashBoardView } from "containers/AdminDashBoardView";
import { Layout } from "containers/Layout";
import {} from "containers/UserDashBoardView";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useFetchData } from "utils/hooks/useFetchData";

export function AdminDashBoard() {
  const { data, error } = useFetchData<APIAdminAnalytics>(
    "/surveyapp/admin/anylytics",
    true
  );

  useEffect(() => {
    if (error) {
      toast.error("Unable to load data ");
    }
  }, [error]);
  return (
    <Layout>
      {data ? (
        <AdminDashBoardView adminAnalytics={data} />
      ) : (
        <Loader fullPage={true} />
      )}
    </Layout>
  );
}
