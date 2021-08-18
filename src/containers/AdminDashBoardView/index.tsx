import React from "react";
import { FaAdversal, FaChartBar, FaCocktail } from "react-icons/fa";
import { Card, Table, LineChartSimple } from "components";
import { AdminDashBoardViewProps } from "types/props";

export function AdminDashBoardView(props: AdminDashBoardViewProps) {
  const {
    adminAnalytics: {
      totalSurveys,
      weeklySurveys,
      totalActiveSurveys,
      weeklyActiveSurveys,
      totalUpcomingSurveys,
      totalSurveyResponses,
      totalUsers,
      newUsers,
      weeklyUserSurveyData,
      recentSurveys,
    },
  } = props;

  const tableHeaders = [
    "survey_name",
    "user",
    "survey_expiry",
    "no_of_questions",
  ];

  const getTableRows = () =>
    recentSurveys.map((value) => ({
      no_of_questions: value.survey?.items.length,
      survey_expiry: value.survey?.expiryDate,
      survey_name: value.survey?.name,
      user: value.user?.lastname,
    }));

  return (
    <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-10">
      <div className="px-4 md:px-10 mx-auto w-full">
        <div className="flex flex-wrap">
          <Card
            bodyDesc="Since last week"
            bodyText={weeklySurveys}
            icon={<FaChartBar />}
            iconBg="red"
            linkDesc="create new"
            title="Total Surveys"
            titleDesc={totalSurveys}
            viewLink="/web/createSurvey"
          />
          <Card
            bodyDesc="Since last week"
            bodyText={weeklyActiveSurveys}
            icon={<FaCocktail />}
            iconBg="gray"
            title="Active Surveys"
            titleDesc={totalActiveSurveys}
          />
          <Card
            bodyDesc="Total Responses"
            bodyText={totalSurveyResponses}
            icon={<FaAdversal />}
            iconBg="green"
            linkDesc="click to view"
            title="Upcoming Services"
            titleDesc={totalUpcomingSurveys}
            viewLink="/web/adminsurvey"
          />

          <Card
            bodyDesc="since last week"
            bodyText={newUsers}
            icon={<FaChartBar />}
            iconBg="indigo"
            title="Total Users"
            titleDesc={totalUsers}
          />
        </div>
        <div className="flex flex-wrap mt-10">
          {weeklyUserSurveyData && (
            <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
              <LineChartSimple
                data={weeklyUserSurveyData}
                lineLabel="noOfUsers"
                title="Weekly Survey Responses"
                xAxisLabel="date"
              />
            </div>
          )}
          {getTableRows() && (
            <div className="w-full xl:w-6/12 px-4">
              <Table
                data={getTableRows()}
                tableHeaders={tableHeaders}
                title="Survey Responses"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
