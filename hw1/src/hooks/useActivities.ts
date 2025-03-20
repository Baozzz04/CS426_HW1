import { useState, useEffect } from "react";
import { Activity } from "../utils/constants";

export const useActivities = () => {
  // List of activities getting from Local Storage
  const [activities, setActivities] = useState<Activity[]>(() => {
    const storedActivities = localStorage.getItem("activitiesData");
    if (storedActivities) {
      try {
        return JSON.parse(storedActivities);
      } catch (error) {
        console.error("Error parsing stored activities:", error);
        return [];
      }
    }
    return [];
  });

  // Saving the activities to Local Storage
  useEffect(() => {
    localStorage.setItem("activitiesData", JSON.stringify(activities));
  }, [activities]);

  // Function to add a new activity
  const addActivity = (activity: Activity) => {
    setActivities((prevActivities) => [activity, ...prevActivities]);
  };

  return { activities, addActivity };
};
