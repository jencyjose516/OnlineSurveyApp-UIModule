import React from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
} from "recharts";
import { LineChartSimpleProps } from "types/props";
export function LineChartSimple(props: LineChartSimpleProps) {
  const { data, title, xAxisLabel, lineLabel } = props;

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Overview
            </h6>
            <h2 className="text-black text-xl font-semibold">{title}</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-350-px">
          <ResponsiveContainer height={250} width="95%">
            <LineChart data={data}>
              <CartesianGrid color="gray" strokeDasharray="2 2" />
              <XAxis dataKey={xAxisLabel} />
              <YAxis />
              <Tooltip />
              <Line dataKey={lineLabel} stroke="blue" type="monotone" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
