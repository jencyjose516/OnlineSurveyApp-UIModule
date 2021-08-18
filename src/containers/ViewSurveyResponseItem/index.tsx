import React from "react";
import { ViewSurveyResponseItemProps } from "types/props";

export function ViewSurveyResponseItem(props: ViewSurveyResponseItemProps) {
  const { response, survey, user } = props;
  return response && survey && user ? (
    <>
      <div className="p-2 sm:p-12 md:24">
        <table>
          <tr>
            <th>Survey Name</th>
            <td>{survey.name}</td>
          </tr>
          <tr>
            <th>Survey Expiry</th>
            <td>{survey.expiryDate}</td>
          </tr>
          <tr>
            <th>User</th>
            <td>{user.lastname}</td>
          </tr>
        </table>
        <br />
        <div className="pb-5 border-t-2 border-light-blue-100"></div>
        <ul>
          {response.map((qres, index) => (
            <li key={index}>
              <div className="py-3">
                <div>
                  <p className="text-1xl subpixel-antialiased font-semibold tracking-wide leading-9 break-words">
                    {"(" + (index + 1) + ") " + qres.question?.question}
                  </p>
                </div>
              </div>
              <div className="pl-3">
                <p className="text-1xl subpixel-antialiased tracking-wide leading-9 break-words">
                  {qres.answers}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <h1>No Response</h1>
  );
}
