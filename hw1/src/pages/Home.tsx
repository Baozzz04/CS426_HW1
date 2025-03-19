import { useEffect, useState, useMemo } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import SummaryCard from "../components/Home/SummaryCard";
import ActivityChart from "../components/Home/ActivityChart";
import { Activity } from "../utils/constants";
import { calculateCarbonData } from "../utils/calculateCarbonUsage";
import { getSummaryData } from "../utils/summaryData";
import { getChartsData, options } from "../utils/chartsData";
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
import GoalCard, { Goals } from "../components/Home/GoalCard";

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
  const [activities, setActivities] = useState<Activity[]>([]);
  const [carbonData, setCarbonData] = useState<{
    total: number;
    weekly: { labels: string[]; data: number[] };
    monthly: { labels: string[]; data: number[] };
    topActivity: string;
  }>({
    total: 0,
    weekly: { labels: [], data: [0, 0, 0, 0, 0, 0, 0] },
    monthly: { labels: [], data: [0, 0, 0, 0] },
    topActivity: "",
  });
  const [goals, setGoals] = useState<Goals>({ weekly: 0, monthly: 0 });

  useEffect(() => {
    const stored = localStorage.getItem("activitiesData");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setActivities(parsed);
        }
      } catch (error) {
        console.error("Error parsing activitiesData from localStorage:", error);
      }
    }

    const storedWeekly = localStorage.getItem("weeklyCarbonGoal");
    const storedMonthly = localStorage.getItem("monthlyCarbonGoal");

    setGoals({
      weekly: storedWeekly ? Number(storedWeekly) : 0,
      monthly: storedMonthly ? Number(storedMonthly) : 0,
    });
  }, []);

  useEffect(() => {
    if (activities.length) {
      const data = calculateCarbonData(activities);
      setCarbonData(data);
    }
  }, [activities]);

  const summaryData = useMemo(
    () =>
      getSummaryData(
        carbonData.total,
        carbonData.monthly,
        carbonData.topActivity
      ),
    [carbonData]
  );

  const chartsData = useMemo(
    () => getChartsData(carbonData.weekly, carbonData.monthly),
    [carbonData]
  );

  const weeklyUsage = useMemo(
    () => carbonData.weekly.data.reduce((sum, val) => sum + val, 0),
    [carbonData]
  );

  const monthlyUsage = useMemo(
    () => carbonData.monthly.data.reduce((sum, val) => sum + val, 0),
    [carbonData]
  );

  return (
    <div>
      <NavigationBar />
      <div className="max-w-4xl mx-auto p-4">
        <header className="text-center mt-8 mb-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Welcome to Your Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into your activity trends, explore your daily insights, and
            discover how your actions impact the world.
          </p>
        </header>

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
