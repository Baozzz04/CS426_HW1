import NavigationBar from "../components/NavigationBar/NavigationBar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import SummaryCard from "../components/Home/SummaryCard";
import ActivityChart from "../components/Home/ActivityChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  // Mock data for charts
  const summaryData = [
    { title: "Total Carbon Footprint", value: 1234, color: "green" },
    { title: "Monthly Carbon Footprint", value: 456, color: "blue" },
    {
      title: "Top Carbon Activity",
      value: "Office Commute",
      color: "red",
      unit: "",
    },
  ];

  const weekData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Activity",
        data: [12, 19, 3, 5, 2, 3, 7],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const monthData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Monthly Activity",
        data: [50, 60, 70, 80],
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
  };

  const chartsData = [
    { title: "Weekly Activity", data: weekData },
    { title: "Monthly Activity", data: monthData },
  ];

  return (
    <div>
      <NavigationBar />
      <div className="max-w-4xl mx-auto p-4">
        {/* Header Section */}
        <div className="text-center mt-8 mb-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into your activity trends, explore your daily insights, and
            discover how your actions impact the world.
          </p>
        </div>

        {/* Summary Boxes */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {summaryData.map((item, index) => (
            <SummaryCard
              key={index}
              title={item.title}
              value={item.value}
              color={item.color}
              unit={item.unit}
            />
          ))}
        </div>

        {/* Activity Charts */}
        <div className="mb-12 flex flex-col md:flex-row gap-4">
          {chartsData.map((chart, index) => (
            <ActivityChart
              key={index}
              title={chart.title}
              data={chart.data}
              options={options}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
