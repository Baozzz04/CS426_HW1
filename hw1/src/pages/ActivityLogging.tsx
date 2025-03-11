import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Activity } from "../utils/constants";
import { ActivityForm } from "../components/ActivityLogging/ActivityForm";
import { LoggedActivities } from "../components/ActivityLogging/LoggedActivity";

const ActivityLogging: React.FC = () => {
  const [activitiesData, setActivitiesData] = useState<Activity[]>([
    {
      name: "Morning Run",
      date: "2025-03-09",
      type: "Exercise",
      avgCarbon: 2.5,
    },
    {
      name: "Office Commute",
      date: "2025-03-10",
      type: "Transport",
      avgCarbon: 15.0,
    },
    {
      name: "Lunch at Cafe",
      date: "2025-03-10",
      type: "Food",
      avgCarbon: 5.0,
    },
    {
      name: "Evening Walk",
      date: "2025-03-11",
      type: "Exercise",
      avgCarbon: 1.8,
    },
    // ... add more initial activities if needed
  ]);

  const addActivity = (activity: Activity) => {
    setActivitiesData((prevActivities) => [activity, ...prevActivities]);
  };

  return (
    <div>
      <NavigationBar />
      <div className="p-8">
        {/* Hero Section */}
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
