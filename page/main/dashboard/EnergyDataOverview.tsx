"use client";

import { FC, use, useEffect, useState } from "react";

import EnergyDataChart from "@/page/main/dashboard/EnergyDataChart";
import { useFetch } from "@/global/hooks/useFetch";
import { ENERGY_PATH } from "@/global/routes/apiRoutes";
import { EnergyData } from "@/page/main/dashboard/types";

const EnergyDataOverview: FC = () => {
  const {
    loading: fetchLoading,
    data: energyData,
    refetch,
  } = useFetch<Array<EnergyData> | null>(
    ENERGY_PATH +
      "?startAt=2023-08-11T08:00:00.000Z&endAt=2023-08-14T20:00:00.000Z"
  );
  const [selectedEnergyData, setSelectedEnergyData] = useState<
    EnergyData[] | null
  >(null);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());

  useEffect(() => {
    const filterDay = (date: Date) => {
      if (energyData) {
        const dayString = date.toISOString().split("T")[0];
        const filteredEnergyData = energyData.filter((data) => {
          const dataDate = new Date(data.endDate);
          const dataDateString = dataDate.toISOString().split("T")[0];
          return dataDateString === dayString;
        });
        setSelectedEnergyData(filteredEnergyData);
      }
    };
    filterDay(selectedDay);
  }, [selectedDay, energyData]);

  useEffect(() => {
    if (energyData) {
      setSelectedEnergyData(energyData);
    }
  }, [energyData]);

  const filterToday = () => {
    const today = new Date();
    setSelectedDay(today);
  };

  const nextDay = () => {
    const nextDay = new Date(selectedDay);
    nextDay.setDate(nextDay.getDate() + 1);
    setSelectedDay(nextDay);
  };

  const previousDay = () => {
    const previousDay = new Date(selectedDay);
    previousDay.setDate(previousDay.getDate() - 1);
    setSelectedDay(previousDay);
  };

  return (
    <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">
      <button onClick={() => filterToday()}>Today</button>
      <button onClick={() => nextDay()}>Today</button>
      <button onClick={() => previousDay()}>Today</button>
      {fetchLoading || !selectedEnergyData ? (
        <p>Loading...</p>
      ) : (
        <EnergyDataChart energyData={selectedEnergyData} />
      )}
    </div>
  );
};

export default EnergyDataOverview;
