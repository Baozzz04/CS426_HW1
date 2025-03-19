import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Activity } from "../utils/constants";
import { ActivityForm } from "../components/ActivityLogging/ActivityForm";
import { LoggedActivities } from "../components/ActivityLogging/LoggedActivity";

const ActivityLogging: React.FC = () => {
  const [activitiesData, setActivitiesData] = useState<Activity[]>(() => {
    const storedActivities = localStorage.getItem("activitiesData");
    if (storedActivities) {
      try {
        return JSON.parse(storedActivities);
      } catch (error) {
        console.error("Error parsing stored activities:", error);
        return [];
      }
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("activitiesData", JSON.stringify(activitiesData));
  }, [activitiesData]);

  const addActivity = (activity: Activity) => {
    setActivitiesData((prevActivities) => [activity, ...prevActivities]);
  };

  return (
    <div>
      <NavigationBar />
      <div className="p-8">
        <div className="text-center mt-8 mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
            Track Your Daily Activities
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Record your daily routines and monitor your environmental impact
            with ease.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          <ActivityForm onLogActivity={addActivity} />
          <LoggedActivities activitiesData={activitiesData} />
        </div>
      </div>
    </div>
  );
};

export default ActivityLogging;
