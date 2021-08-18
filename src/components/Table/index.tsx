import React from "react";
import { Link } from "react-router-dom";
import { BasicTableProps } from "types/props";

export function Table(props: BasicTableProps) {
  const { data, tableHeaders, title } = props;

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className="font-semibold text-base text-blueGray-700 camelcase">
              {title}
            </h3>
          </div>
          <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            <Link to="/web/surveyresponse">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse divide-y">
          <thead>
            <tr>
              {tableHeaders.map((header, index) => (
                <th
                  className={
                    ` w-1/` +
                    tableHeaders.length +
                    ` px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 
                                    text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left`
                  }
                  key={index}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((value: any, index: number) => (
                <tr className="break-all" key={index}>
                  {tableHeaders.map(
                    (header, i) =>
                      (i == 0 && (
                        <th
                          className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 text-left "
                          key={i}
                        >
                          {value[header]}
                        </th>
                      )) || (
                        <td
                          className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 break-words"
                          key={i}
                        >
                          {value[header]}
                        </td>
                      )
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
