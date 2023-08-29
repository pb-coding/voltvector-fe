import { FC } from "react";

import ProtectedRoute from "@/global/auth/ProtectedRoute";
import EnergyDataOverviewCard from "@/page/main/dashboard/energyChart/EnergyDataOverviewCard";
import DeviceControlOverview from "@/page/main/dashboard/deviceControl/DeviceControlOverview";

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
        <DeviceControlOverview />
      </ProtectedRoute>
    </main>
  );
};
export default DashboardPage;
