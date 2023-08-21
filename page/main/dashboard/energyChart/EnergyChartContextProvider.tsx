"use client";

import {
  Dispatch,
  createContext,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { startOfDay, endOfDay, set } from "date-fns";

import {
  ChartViewTimeframe,
  SelectedChartView,
  SelectedChartViewType,
  SkipDirection,
  SkipDirectionType,
} from "@/page/main/dashboard/energyChart/types";
import { useFetch } from "@/global/hooks/useFetch";
import { ENERGY_PATH } from "@/global/routes/apiRoutes";
import { EnergyData } from "@/page/main/dashboard/types";

const createTimeframeForDay = (day: Date) => {
  const startAt = startOfDay(day);
  const endAt = endOfDay(day);
  return { startAt, endAt };
};

type EnergyChartContextType = {
  fetchLoading: Boolean;
  energyData: Array<EnergyData> | null;
  selectedChartView: SelectedChartViewType;
  handleChartViewSwitch: (
    chartView: SelectedChartViewType,
    isDropdownOpenCallback: Dispatch<SetStateAction<boolean>>
  ) => void;
  selectedEnergyData: EnergyData[] | null;
  selectedTimeframe: ChartViewTimeframe;
  setTodayTimeframe: () => void;
  handlePreviousNextClick: (skipDirection: SkipDirectionType) => void;
  yAxisRange: number;
  setYAxisRange: Dispatch<SetStateAction<number>>;
  customYAxisEnabled: boolean;
  setCustomYAxisEnabled: Dispatch<SetStateAction<boolean>>;
};

export const EnergyChartContext = createContext<EnergyChartContextType>({
  fetchLoading: true,
  energyData: null,
  selectedChartView: SelectedChartView.Day,
  handleChartViewSwitch: () => {},
  selectedEnergyData: null,
  selectedTimeframe: createTimeframeForDay(new Date()),
  setTodayTimeframe: () => {},
  handlePreviousNextClick: () => {},
  yAxisRange: 1000,
  setYAxisRange: () => {},
  customYAxisEnabled: false,
  setCustomYAxisEnabled: () => {},
});

type EnergyChartContextProviderProps = {
  children: ReactNode;
};

const EnergyChartContextProvider: FC<EnergyChartContextProviderProps> = ({
  children,
}) => {
  const defaultTimeframe = createTimeframeForDay(new Date());
  const [selectedTimeframe, setSelectedTimeframe] =
    useState<ChartViewTimeframe>(defaultTimeframe);

  const [selectedChartView, setSelectedChartView] =
    useState<SelectedChartViewType>(SelectedChartView.Day);

  const [selectedEnergyData, setSelectedEnergyData] = useState<
    EnergyData[] | null
  >(null);

  const [yAxisRange, setYAxisRange] = useState<number>(1000);
  const [customYAxisEnabled, setCustomYAxisEnabled] = useState<boolean>(false);

  const {
    loading: fetchLoading,
    data: energyData,
    refetch,
  } = useFetch<Array<EnergyData> | null>(ENERGY_PATH);

  const handleChartViewSwitch = (
    chartView: SelectedChartViewType,
    isDropdownOpenCallback: Dispatch<SetStateAction<boolean>>
  ) => {
    setSelectedChartView(chartView);
    if (chartView === SelectedChartView.Day) {
      setTodayTimeframe();
    }
    if (chartView === SelectedChartView.Week) {
      const today = new Date();
      const startAt = new Date(today.setDate(today.getDate() - 7));
      const endAt = new Date();
      setSelectedTimeframe({ startAt, endAt });
    }
    if (chartView === SelectedChartView.Month) {
      const today = new Date();
      const startAt = new Date(today.setDate(today.getDate() - 30));
      const endAt = new Date();
      setSelectedTimeframe({ startAt, endAt });
    }
    isDropdownOpenCallback(false);
  };

  const getSkipDaysByChartView = (chartView: SelectedChartViewType) => {
    switch (chartView) {
      case SelectedChartView.Day:
        return 1;
      case SelectedChartView.Week:
        return 7;
      case SelectedChartView.Month:
        return 30;
      default:
        throw new Error("Invalid chart view");
    }
  };

  const setTodayTimeframe = () => {
    setSelectedChartView(SelectedChartView.Day);
    const todayTimeframe = createTimeframeForDay(new Date());
    setSelectedTimeframe(todayTimeframe);
  };

  const handlePreviousNextClick = (skipDirection: SkipDirectionType) => {
    const { startAt, endAt } = selectedTimeframe;
    const nextStartAt = new Date(startAt);
    const nextEndAt = new Date(endAt);
    const skipDays =
      getSkipDaysByChartView(selectedChartView) *
      (skipDirection === SkipDirection.Backward ? -1 : 1);
    nextStartAt.setDate(nextStartAt.getDate() + skipDays);
    nextEndAt.setDate(nextEndAt.getDate() + skipDays);
    setSelectedTimeframe({ startAt: nextStartAt, endAt: nextEndAt });
  };

  useEffect(() => {
    const filterEnergyDataByTimeframe = (timeframe: ChartViewTimeframe) => {
      if (!energyData) return;
      const filteredEnergyData = energyData.filter((data) => {
        const dataDate = new Date(data.endDate);
        return dataDate >= timeframe.startAt && dataDate <= timeframe.endAt;
      });
      setSelectedEnergyData(filteredEnergyData);
    };

    filterEnergyDataByTimeframe(selectedTimeframe);
  }, [selectedTimeframe, energyData]);

  /*useEffect(() => {
    if (energyData) {
      setSelectedEnergyData(energyData);
    }
  }, [energyData]);*/

  return (
    <EnergyChartContext.Provider
      value={{
        fetchLoading,
        energyData,
        selectedChartView,
        handleChartViewSwitch,
        selectedEnergyData,
        selectedTimeframe,
        setTodayTimeframe,
        handlePreviousNextClick,
        yAxisRange,
        setYAxisRange,
        customYAxisEnabled,
        setCustomYAxisEnabled,
      }}
    >
      {children}
    </EnergyChartContext.Provider>
  );
};

export default EnergyChartContextProvider;
