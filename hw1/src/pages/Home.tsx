import NavigationBar from "../components/NavigationBar/NavigationBar";
import SummaryCard from "../components/Home/SummaryCard";
import ActivityChart from "../components/Home/ActivityChart";
import GoalCard from "../components/Home/GoalCard";
import { options } from "../utils/chartsData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useDashboardData } from "../hooks/userDashboardData";

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
  const { goals, summaryData, chartsData, weeklyUsage, monthlyUsage } =
    useDashboardData();

  return (
    <div>
      {/* Navigation Bar Section */}
      <NavigationBar />
      <div className="max-w-4xl mx-auto p-4">
        {/* Title Section */}
        <header className="text-center mt-8 mb-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into your activity trends, explore your daily insights, and
            discover how your actions impact the world.
          </p>
        </header>

        {/* Summary Section, including Total Usage, Monthly Usage, and Top Carbon Activity */}
        <section className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {summaryData.map((item, index) => (
            <SummaryCard
              key={index}
              title={item.title}
              value={item.value}
              unit={item.unit}
            />
          ))}
        </section>

        {/* Goals Section, including Weekly Usage vs Goal and Monthly Usage vs Goal */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <GoalCard
            title="Weekly Usage vs Goal"
            currentValue={weeklyUsage}
            goalValue={goals.weekly}
          />
          <GoalCard
            title="Monthly Usage vs Goal"
            currentValue={monthlyUsage}
            goalValue={goals.monthly}
          />
        </section>

        {/* Charts Section, including Weekly Usage and Monthly Usage */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {chartsData.map((chart, index) => (
            <ActivityChart
              key={index}
              title={chart.title}
              data={chart.data}
              options={options}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
