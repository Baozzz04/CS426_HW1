import { useEffect, useState, useMemo } from "react";
import { Activity } from "../utils/constants";
import { calculateCarbonData } from "../utils/calculateCarbonUsage";
import { getSummaryData } from "../utils/summaryData";
import { getChartsData } from "../utils/chartsData";
import { useGoals } from "../context/GoalsContext";

interface CarbonData {
  total: number;
  weekly: { labels: string[]; data: number[] };
  monthly: { labels: string[]; data: number[] };
  topActivity: string;
}

export const useDashboardData = () => {
  // Access goals context
  const {goals} = useGoals();

  // States for activities, goals, and carbon data
  const [activities, setActivities] = useState<Activity[]>([]);
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
