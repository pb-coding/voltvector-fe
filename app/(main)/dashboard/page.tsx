import { FC } from "react";

import ProtectedRoute from "@/global/auth/ProtectedRoute";
import EnergyDataOverview from "@/page/main/dashboard/energyChart/EnergyDataOverview";
import EnergyChartContextProvider from "@/page/main/dashboard/energyChart/EnergyChartContextProvider";
import EnergyDataOverviewCard from "@/page/main/dashboard/energyChart/EnergyDataOverviewCard";

import { Role } from "@/global/auth/types";

const DashboardPage: FC = () => {
  return (
    <main className="p-4 md:ml-64 h-auto pt-20">
      <ProtectedRoute role={Role.USER}>
        <div className="mb-5">
          <h2 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">
            Dashboard
          </h2>
        </div>
        <EnergyDataOverviewCard />
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
          <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"></div>
        </div>
      </ProtectedRoute>
    </main>
  );
};
export default DashboardPage;
