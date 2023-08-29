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

import { MerossDevicePowerHistoryData } from "@/page/main/smarthome/types";

type PayloadType = number | string | Array<number | string>;

type LabelType = string | number;

type DeviceEnergyChartProps = {
  energyData: MerossDevicePowerHistoryData; // TODO: in the future: adapt to multiple providers
};

const DeviceEnergyChart: FC<DeviceEnergyChartProps> = ({ energyData }) => {
  const CustomTooltip: FC<TooltipProps<PayloadType, LabelType>> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      const date = new Date(label);
      const dateLabel = date.toLocaleDateString();
      return (
        <div className="p-4 bg-white border border-gray-300 rounded dark:text-white dark:border-gray-700 dark:bg-gray-800">
          <p className="font-bold mb-2">{dateLabel}</p>
          {payload.map((item, index) => {
            let color = "text-red-500";

            return (
              <p key={index} className={twMerge("m-0", color)}>
                {item.value} Watt hours
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
        data={energyData.consumptionx}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
        <XAxis
          dataKey="date"
          tickFormatter={(tickItem) => {
            const date = new Date(tickItem);
            return `${date.toLocaleDateString()}`;
          }}
        />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          name="Watt hours"
          stroke="#f56565" // corresponds to text-red-500
          activeDot={{ r: 8 }}
          dot={{ r: 1 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DeviceEnergyChart;
