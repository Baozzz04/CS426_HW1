import React, { useState } from "react";
import NavigationBar from "../components/Cards/NavigationBar";
import { Button } from "../components/FormElements";
import activities from "../utils/constants";

const ActivityLogging = () => {
  const [activityName, setActivityName] = useState("");
  const [activityType, setActivityType] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [carbonProduced, setCarbonProduced] = useState("");

  const handleLogActivity = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      "Activity logged:",
      activityName,
      activityType,
      activityDate,
      carbonProduced
    );
  };

  const handleClick = () => {
    handleLogActivity({} as React.FormEvent<HTMLFormElement>);
  };

  const handleActivityTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedActivity = activities.find(
      (activity) => activity.type === e.target.value
    );
    if (selectedActivity) {
      setActivityType(e.target.value);
      setCarbonProduced(selectedActivity.carbonValue.toString());
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold p-8">Activity Logging</h1>
        <form
          onSubmit={handleLogActivity}
          className="bg-white shadow-md rounded-xl px-8 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-bold mb-2"
              htmlFor="activityName"
            >
              Name of the Activity
            </label>
            <input
              id="activityName"
              type="text"
              defaultValue="Name of activity"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
              className="block w-full p-2 pl-4 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent h-12"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="activityType"
              >
                Type of the Activity
              </label>
              <select
                id="activityType"
                value={activityType}
                onChange={handleActivityTypeChange}
                className="block w-full p-2 pl-4 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent h-12"
              >
                <option value="">Select an activity type</option>
                {activities.map((activity) => (
                  <option key={activity.type} value={activity.type}>
                    {activity.type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="activityDate"
              >
                Date of the Activity
              </label>
              <input
                id="activityDate"
                type="date"
                defaultValue="YYYY-MM-DD"
                value={activityDate}
                onChange={(e) => setActivityDate(e.target.value)}
                className="block w-full p-2 pl-4 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent h-12"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-md font-bold mb-2"
                htmlFor="carbonProduced"
              >
                Average Carbon Produced
              </label>
              <input
                id="carbonProduced"
                type="text"
                value={carbonProduced}
                readOnly
                className="block w-full p-2 pl-4 text-sm text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent h-12"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              value="Submit"
              handleClick={handleClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Log Activity
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActivityLogging;
