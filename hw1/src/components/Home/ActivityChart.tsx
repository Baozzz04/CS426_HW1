import { ChartOptions, ChartDataset } from "chart.js";
import { Line } from "react-chartjs-2";

interface ActivityChartData {
  labels: string[];
  datasets: ChartDataset<"line", number[]>[];
}

interface ActivityChartProps {
  title: string;
  data: ActivityChartData;
  options: ChartOptions<"line">;
}

const ActivityChart: React.FC<ActivityChartProps> = ({
  title,
  data,
  options,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex-1">
      <h2 className="text-2xl font-semibold mb-2 text-center">{title}</h2>
      <div className="relative w-full h-64 md:h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivityChart;
