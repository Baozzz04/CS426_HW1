import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { ActivityForm } from "../components/ActivityLogging/ActivityForm";
import { LoggedActivities } from "../components/ActivityLogging/LoggedActivity";
import { useActivities } from "../hooks/useActivities";

const ActivityLogging: React.FC = () => {
  // Calling the useActivities hook to get the activities and addActivity function
  const { activities, addActivity } = useActivities();

  return (
    <div>
      {/* Navigation Bar */}
      <NavigationBar />
      <div className="p-8">
        {/* Title Section */}
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
          {/* Form Section */}
          <ActivityForm onLogActivity={addActivity} />
          {/* Logged Activities Section */}
          <LoggedActivities activitiesData={activities} />
        </div>
      </div>
    </div>
  );
};

export default ActivityLogging;
