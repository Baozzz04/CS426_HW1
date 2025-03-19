import { ChartOptions } from "chart.js";

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    tension: number;
  }[];
}

export interface ChartsData {
  title: string;
  data: ChartData;
}

export const initialWeekData: ChartData = {
  labels: [],
  datasets: [
    {
      label: "Weekly Activity",
      data: [],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const initialMonthData: ChartData = {
  labels: [],
  datasets: [
    {
      label: "Monthly Activity",
      data: [],
      fill: false,
      borderColor: "rgb(153, 102, 255)",
      tension: 0.1,
    },
  ],
};

export const getChartsData = (
  weeklyConsumption: { labels: string[]; data: number[] },
  monthlyConsumption: { labels: string[]; data: number[] }
): ChartsData[] => {
  const weekData: ChartData = {
    labels: weeklyConsumption.labels,
    datasets: [
      { ...initialWeekData.datasets[0], data: weeklyConsumption.data },
    ],
  };

  const monthData: ChartData = {
    labels: monthlyConsumption.labels,
    datasets: [
      { ...initialMonthData.datasets[0], data: monthlyConsumption.data },
    ],
  };

  return [
    { title: "Weekly Activity", data: weekData },
    { title: "Monthly Activity", data: monthData },
  ];
};

export const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
};
