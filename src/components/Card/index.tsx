import React from "react";
import { Link } from "react-router-dom";
import { CardProps } from "types/props";

export function Card(props: CardProps) {
  const {
    title,
    titleDesc,
    icon,
    iconBg,
    bodyText,
    bodyDesc,
    viewLink,
    linkDesc,
  } = props;

  const iconColor = (iconBg: string) => {
    switch (iconBg) {
      case "red":
        return "bg-red-500";

      case "blue":
        return "bg-blue-500";

      case "green":
        return "bg-green-500";

      case "gray":
        return "bg-gray-500";

      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="w-full md:w-6/12 xl:w-3/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {title}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {titleDesc}
              </span>
            </div>
            {iconBg && icon && (
              <div className="relative w-auto pl-4 flex-initial">
                <div
                  className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${iconColor(
                    iconBg
                  )}`}
                >
                  {icon}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-wrap pt-5">
            <div className="relative w-full pr-4 h-10 max-w-full flex-grow flex-1 self-center">
              <p className="text-sm text-blueGray-400">
                <span className="text-emerald-500 pr-1">{bodyText}</span>
                <span className="whitespace-nowrap">{bodyDesc}</span>
              </p>
            </div>
            <div className="relative w-auto flex-initial">
              {viewLink && (
                <Link to={viewLink}>
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-1
                                rounded outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                  >
                    {linkDesc}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
