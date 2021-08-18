import { Loader } from "components/Loader";
import { Layout } from "containers/Layout";
import { UserProfile } from "containers/UserProfile";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useFetchData } from "utils/hooks/useFetchData";

export function Profile() {
  const { data, error } = useFetchData<User>(
    "/surveyapp/user/profile/get",
    false
  );

  useEffect(() => {
    if (error) {
      toast.error("Unable to load data");
    }
  }, [error]);
  return (
    <>
      <Layout>
        {data ? <UserProfile user={data} /> : <Loader fullPage />}
      </Layout>
    </>
  );
}
