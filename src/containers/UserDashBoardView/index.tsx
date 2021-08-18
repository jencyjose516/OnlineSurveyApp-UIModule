import React from "react";
import { Card } from "components/Card";
import { FaCheckSquare, FaGem, FaHashtag, FaPollH } from "react-icons/fa";
import { UserDashBoardViewProps } from "types/props";
export function UserDashBoardView(props: UserDashBoardViewProps) {
  const {
    attendedSurvey,
    lastname,
    availableSurvey,
    points,
    totalTopics,
    weeklyAttendedSurvey,
    weeklyAvailableSurvey,
    weeklyPoints,
  } = props.data;
  return (
    <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-10">
      <div className="px-4 md:px-10 mx-auto w-full">
        <div className="flex justify-end">
          <div className="pr-5 text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block text-lg">
            Hi, {lastname}
          </div>
        </div>
        <div>
          <div className="flex flex-wrap">
            <Card
              bodyDesc="Since last week"
              bodyText={weeklyPoints}
              icon={<FaGem />}
              iconBg="red"
              title="Points Gained"
              titleDesc={points}
            />
            <Card
              bodyDesc="Since last week"
              bodyText={weeklyAttendedSurvey}
              icon={<FaCheckSquare />}
              iconBg="gray"
              title="Attended Surveys"
              titleDesc={attendedSurvey}
            />
            <Card
              bodyDesc="Since last week"
              bodyText={weeklyAvailableSurvey}
              icon={<FaPollH />}
              iconBg="green"
              linkDesc="click to view"
              title="Availble Surveys"
              titleDesc={availableSurvey}
              viewLink="/web/usersurvey"
            />

            <Card
              bodyDesc="Total topics"
              bodyText={totalTopics}
              icon={<FaHashtag />}
              iconBg="indigo"
              title="Populer Topics"
              titleDesc="Sports, Movie"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
