import { Activity } from "../utils/constants";

interface WeeklyConsumption {
  labels: string[];
  data: number[];
}

interface MonthlyConsumption {
  labels: string[];
  data: number[];
}

interface CarbonData {
  total: number;
  weekly: WeeklyConsumption;
  monthly: MonthlyConsumption;
  topActivity: string;
}

const calculateTotalCarbon = (activities: Activity[]): number => {
  return activities.reduce((acc, curr) => acc + curr.avgCarbon, 0);
};

const calculateWeeklyConsumption = (
  activities: Activity[]
): WeeklyConsumption => {
  // Set today at local midnight.
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Define a 7-day window: from (today - 3 days) to (today + 3 days)
  const startOfWindow = new Date(today);
  startOfWindow.setDate(today.getDate() - 3);

  const labels: string[] = [];
  const data: number[] = Array(7).fill(0);

  // Generate labels for each day in the window.
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startOfWindow);
    currentDate.setDate(startOfWindow.getDate() + i);
    labels.push(
      currentDate.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      })
    );
  }

  // Define end of window (non-inclusive).
  const endOfWindow = new Date(startOfWindow);
  endOfWindow.setDate(startOfWindow.getDate() + 7);

  // Process each activity.
  activities.forEach((activity) => {
    // Ensure the activity date is parsed as a local date.
    const activityDate = new Date(activity.date + "T00:00:00");
    activityDate.setHours(0, 0, 0, 0);
    if (activityDate >= startOfWindow && activityDate < endOfWindow) {
      const diffDays = Math.floor(
        (activityDate.getTime() - startOfWindow.getTime()) /
          (1000 * 60 * 60 * 24)
      );
      data[diffDays] += activity.avgCarbon;
    }
  });

  return { labels, data };
};

const calculateMonthlyConsumption = (
  activities: Activity[]
): MonthlyConsumption => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const monthName = now.toLocaleString(undefined, { month: "short" });
  // Get last day of current month.
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Define labels for each week.
  const labels = [
    `${monthName} 1 - 7`,
    `${monthName} 8 - 14`,
    `${monthName} 15 - 21`,
    `${monthName} 22 - ${lastDay}`,
  ];
  const data = [0, 0, 0, 0];

  activities.forEach((activity) => {
    // Ensure correct local date parsing.
    const activityDate = new Date(activity.date + "T00:00:00");
    if (
      activityDate.getFullYear() === currentYear &&
      activityDate.getMonth() === currentMonth
    ) {
      const day = activityDate.getDate();
      // Calculate week index: 0 for 1-7, 1 for 8-14, 2 for 15-21, and 3 for 22+
      let weekIndex = Math.floor((day - 1) / 7);
      if (weekIndex > 3) weekIndex = 3;
      data[weekIndex] += activity.avgCarbon;
    }
  });

  return { labels, data };
};

const calculateTopActivity = (activities: Activity[]): string => {
  const typeMap: Record<string, number> = {};
  activities.forEach((activity) => {
    const type = activity.type;
    typeMap[type] = (typeMap[type] || 0) + activity.avgCarbon;
  });
  let maxType = "";
  let maxValue = 0;
  for (const type in typeMap) {
    if (typeMap[type] > maxValue) {
      maxValue = typeMap[type];
      maxType = type;
    }
  }
  return maxType;
};

export const calculateCarbonData = (activities: Activity[]): CarbonData => {
  return {
    total: calculateTotalCarbon(activities),
    weekly: calculateWeeklyConsumption(activities),
    monthly: calculateMonthlyConsumption(activities),
    topActivity: calculateTopActivity(activities),
  };
};
