import { FC } from "react";
import { twMerge } from "tailwind-merge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipProps,
  Legend,
  ResponsiveContainer,
  YAxisProps,
} from "recharts";

import { EnergyData } from "@/page/main/dashboard/types";
import { useEnergyChart } from "./hooks/useEnergyChart";

type YAxisDomainType = YAxisProps["domain"];

type PayloadType = number | string | Array<number | string>;

type LabelType = string | number;

type EnergyDataChartProps = {
  energyData: EnergyData[];
};

const EnergyDataChart: FC<EnergyDataChartProps> = ({ energyData }) => {
  const { yAxisRange, customYAxisEnabled } = useEnergyChart();
  const yAxisDomain: YAxisDomainType = customYAxisEnabled
    ? [0, Number(yAxisRange)]
    : [0, "auto"];

  const CustomTooltip: FC<TooltipProps<PayloadType, LabelType>> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      const date = new Date(label);
      const dateLabel =
        date.toLocaleDateString() + " " + date.toLocaleTimeString();
      return (
        <div className="p-4 bg-white border border-gray-300 rounded dark:text-white dark:border-gray-700 dark:bg-gray-800">
          <p className="font-bold mb-2">{dateLabel}</p>
          {payload.map((item, index) => {
            let color = "text-white";
            if (item.name === "production") color = "text-green-400";
            else if (item.name === "consumption") color = "text-red-500";
            return (
              <p key={index} className={twMerge("m-0", color)}>
                {item.name} : {item.value}
              </p>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400} className="my-4">
      <LineChart
        data={energyData}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
        <XAxis
          dataKey="endDate"
          tickFormatter={(tickItem) => {
            const date = new Date(tickItem);
            return `${date.getHours()}:${date.getMinutes()}`;
          }}
        />
        <YAxis domain={yAxisDomain} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="production"
          stroke="#68d391" // corresponds to text-green-400
          activeDot={{ r: 8 }}
          dot={{ r: 1 }}
        />
        <Line
          type="monotone"
          dataKey="consumption"
          stroke="#f56565" // corresponds to text-red-500
          activeDot={{ r: 8 }}
          dot={{ r: 1 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EnergyDataChart;
