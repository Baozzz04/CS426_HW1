import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import GoalInput from "../components/GoalSettings/GoalInput";
import CarbonData from "../components/GoalSettings/CarbonData";

const GoalSettings: React.FC = () => {
  const [dailyCarbonGoal, setDailyCarbonGoal] = useState<string>("");
  const [weeklyCarbonGoal, setWeeklyCarbonGoal] = useState<string>("");
  const [recordedDailyCarbon] = useState<number>(12);
  const [recordedWeeklyCarbon] = useState<number>(84);

  const handleSaveGoals = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Goals saved:", dailyCarbonGoal, weeklyCarbonGoal);
  };

  const goalInputs = [
    {
      id: "dailyGoal",
      label: "Daily Carbon Goal",
      placeholder: "e.g., 10",
      value: dailyCarbonGoal,
      setter: setDailyCarbonGoal,
    },
    {
      id: "weeklyGoal",
      label: "Weekly Carbon Goal",
      placeholder: "e.g., 70",
      value: weeklyCarbonGoal,
      setter: setWeeklyCarbonGoal,
    },
  ];

  return (
    <div>
      <NavigationBar />
      <div className="p-8">
        {/* Hero Section */}
        <div className="text-center my-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Goal Settings
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Set your carbon goals to stay on track with your eco-friendly
            journey.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Goals Input Section */}
          <div className="flex-1 bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              Set Your Goals
            </h2>
            <form onSubmit={handleSaveGoals} className="space-y-6">
              {goalInputs.map((input, index) => (
                <GoalInput
                  key={index}
                  id={input.id}
                  label={input.label}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={(e) => input.setter(e.target.value)}
                />
              ))}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary hover:brightness-90 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-200 ease-in-out active:scale-95"
                >
                  Save Goals
                </button>
              </div>
            </form>
          </div>

          {/* Carbon Data & Guidelines Section */}
          <div className="flex-1">
            <CarbonData
              recordedDailyCarbon={recordedDailyCarbon}
              recordedWeeklyCarbon={recordedWeeklyCarbon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSettings;
