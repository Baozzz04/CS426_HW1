import { useEffect, useState, useMemo } from "react";
import { Activity } from "../utils/constants";
import { calculateCarbonData } from "../utils/calculateCarbonUsage";
import { getSummaryData } from "../utils/summaryData";
import { getChartsData } from "../utils/chartsData";

interface CarbonData {
  total: number;
  weekly: { labels: string[]; data: number[] };
  monthly: { labels: string[]; data: number[] };
  topActivity: string;
}

interface Goals {
  weekly: number;
  monthly: number;
}

export const useDashboardData = () => {
  // States for activities, goals, and carbon data
  const [activities, setActivities] = useState<Activity[]>([]);
  const [goals, setGoals] = useState<Goals>({ weekly: 0, monthly: 0 });
  const [carbonData, setCarbonData] = useState<CarbonData>({
    total: 0,
    weekly: { labels: [], data: [0, 0, 0, 0, 0, 0, 0] },
    monthly: { labels: [], data: [0, 0, 0, 0] },
    topActivity: "",
  });

  // Retrieve stored activities and goals on component mount
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

    // Retrieve stored goals from local storage
    const storedWeekly = localStorage.getItem("weeklyCarbonGoal");
    const storedMonthly = localStorage.getItem("monthlyCarbonGoal");
    setGoals({
      weekly: storedWeekly ? Number(storedWeekly) : 0,
      monthly: storedMonthly ? Number(storedMonthly) : 0,
    });
  }, []);

  // Calculate carbon data when activities change
  useEffect(() => {
    if (activities.length) {
      const data = calculateCarbonData(activities);
      setCarbonData(data);
    }
  }, [activities]);

  // Calculate summary data, charts data, and usage values
  const summaryData = useMemo(
    () =>
      getSummaryData(carbonData.total, carbonData.monthly, carbonData.topActivity),
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

  return {
    activities,
    setActivities,
    goals,
    summaryData,
    chartsData,
    weeklyUsage,
    monthlyUsage,
  };
};
