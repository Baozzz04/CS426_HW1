// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     fill: boolean;
//     borderColor: string;
//     tension: number;
//   }[];
// }

// interface SummaryData {
//   title: string;
//   value: number | string;
//   color: string;
//   unit?: string;
// }

// interface ChartsData {
//   title: string;
//   data: ChartData;
// }

// const weekData: ChartData = {
//   labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//   datasets: [
//     {
//       label: "Weekly Activity",
//       data: [],
//       fill: false,
//       borderColor: "rgb(75, 192, 192)",
//       tension: 0.1,
//     },
//   ],
// };

// const monthData: ChartData = {
//   labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
//   datasets: [
//     {
//       label: "Monthly Activity",
//       data: [],
//       fill: false,
//       borderColor: "rgb(153, 102, 255)",
//       tension: 0.1,
//     },
//   ],
// };

// const getSummaryData = (
//   totalCarbon: number,
//   monthlyConsumption: number[],
//   topActivity: string
// ): SummaryData[] => {
//   return [
//     { title: "Total Carbon Footprint", value: totalCarbon, color: "green" },
//     {
//       title: "Monthly Carbon Footprint",
//       value: monthlyConsumption.reduce((a, b) => a + b, 0),
//       color: "blue",
//     },
//     {
//       title: "Top Carbon Activity",
//       value: topActivity,
//       color: "red",
//       unit: "",
//     },
//   ];
// };

// const getChartsData = (
//   weeklyConsumption: number[],
//   monthlyConsumption: number[]
// ): ChartsData[] => {
//   weekData.datasets[0].data = weeklyConsumption;
//   monthData.datasets[0].data = monthlyConsumption;
//   return [
//     { title: "Weekly Activity", data: weekData },
//     { title: "Monthly Activity", data: monthData },
//   ];
// };

// export { weekData, monthData, getSummaryData, getChartsData };
