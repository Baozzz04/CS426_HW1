export interface SummaryData {
  title: string;
  value: number | string;
  unit?: string;
}

export interface MonthlyConsumption {
  labels: string[];
  data: number[];
}

// Function to get summary data
export const getSummaryData = (
  totalCarbon: number,
  monthlyConsumption: MonthlyConsumption,
  topActivity: string
): SummaryData[] => [
  { title: "Total Carbon Footprint", value: totalCarbon, unit: "kg" },
  {
    title: "Monthly Carbon Footprint",
    value: monthlyConsumption.data.reduce((a, b) => a + b, 0),
    unit: "kg",
  },
  { title: "Top Carbon Activity", value: topActivity, unit: "" },
];
