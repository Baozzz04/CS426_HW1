import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import GoalInput from "../components/GoalSettings/GoalInput";
import CarbonData from "../components/GoalSettings/CarbonData";
import { useCarbonGoals } from "../hooks/useCarbonGoals";

const GoalSettings: React.FC = () => {
  // Pulling the hooks for carbon goals
  const {
    weeklyCarbonGoal,
    setWeeklyCarbonGoal,
    monthlyCarbonGoal,
    setMonthlyCarbonGoal,
    recordedWeeklyCarbon,
    recordedMonthlyCarbon,
    updateStatus,
    saveGoals,
  } = useCarbonGoals();

  // List of goal input fields to reduce duplication
  const goalInputs = [
    {
      id: "weeklyGoal",
      label: "Weekly Carbon Goal",
      placeholder: "e.g., 70",
      value: weeklyCarbonGoal,
      setter: setWeeklyCarbonGoal,
    },
    {
      id: "monthlyGoal",
      label: "Monthly Carbon Goal",
      placeholder: "e.g., 300",
      value: monthlyCarbonGoal,
      setter: setMonthlyCarbonGoal,
    },
  ];

  return (
    <div>
      {/* Displaying Navigation Bar */}
      <NavigationBar />
      <div className="p-8">
        {/* Title Section */}
        <div className="text-center mt-8 mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
            Goal Settings
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Set your carbon goals to stay on track with your eco-friendly
            journey.
          </p>
        </div>

        {/* Goal Settings Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">Set Your Goals</h2>
            <form onSubmit={saveGoals} className="space-y-4">
              {goalInputs.map((input) => (
                <GoalInput
                  key={input.id}
                  id={input.id}
                  label={input.label}
                  placeholder={input.placeholder}
                  value={input.value}
                  onChange={(e) => input.setter(e.target.value)}
                />
              ))}
              {updateStatus && (
                <p
                  className={`mt-4 text-sm ${
                    updateStatus === "Updating Carbon Goals..."
                      ? "text-gray-700"
                      : updateStatus === "Carbon Goals Updated"
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {updateStatus}
                </p>
              )}
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

          {/* Displaying Carbon Data and the Weekly Carbon Emission Guidelines */}
          <div className="flex-1">
            <CarbonData
              recordedWeeklyCarbon={recordedWeeklyCarbon}
              recordedMonthlyCarbon={recordedMonthlyCarbon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSettings;
