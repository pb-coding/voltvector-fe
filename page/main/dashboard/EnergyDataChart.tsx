import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { EnergyData } from "@/page/main/dashboard/types";

type EnergyDataChartProps = {
  energyData: EnergyData[];
};

const EnergyDataChart: FC<EnergyDataChartProps> = ({ energyData }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={energyData}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="endDate"
          tickFormatter={(tickItem) => {
            const date = new Date(tickItem);
            return `${date.getHours()}:${date.getMinutes()}`;
          }}
        />
        <YAxis />
        <Tooltip
          labelFormatter={(label) => {
            const date = new Date(label);
            return `${date.getHours()}:${date.getMinutes()}`;
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="production"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
          dot={{ r: 1 }}
        />
        <Line
          type="monotone"
          dataKey="consumption"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          dot={{ r: 1 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EnergyDataChart;
