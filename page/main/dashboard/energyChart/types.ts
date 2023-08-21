import { type } from "os";

export enum SelectedChartView {
  Day = "Day",
  Week = "Week",
  Month = "Month",
}

export type SelectedChartViewType = keyof typeof SelectedChartView;

export type ChartViewTimeframe = {
  startAt: Date;
  endAt: Date;
};

export enum SkipDirection {
  Forward = "Forward",
  Backward = "Backward",
}

export type SkipDirectionType = keyof typeof SkipDirection;
