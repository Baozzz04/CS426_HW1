import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import GoalInput from "../components/GoalSettings/GoalInput";
import CarbonData from "../components/GoalSettings/CarbonData";
import { useGoals } from "../context/GoalsContext";

const GoalSettings: React.FC = () => {
  const { goals, saveGoalsToLocalStorage } = useGoals();

  // Local component state for the form inputs (strings)
  const [weeklyCarbonGoal, setWeeklyCarbonGoal] = useState<string>(
    String(goals.weekly || "")
  );
  const [monthlyCarbonGoal, setMonthlyCarbonGoal] = useState<string>(
    String(goals.monthly || "")
  );
  const [updateStatus, setUpdateStatus] = useState<string>("");

  const handleSaveGoals = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation checks for empty fields and negative numbers
    if (!weeklyCarbonGoal.trim() || !monthlyCarbonGoal.trim()) {
      setUpdateStatus("Please fill in your weekly and monthly carbon goals.");
      return;
    }
    const weeklyNum = Number(weeklyCarbonGoal);
    const monthlyNum = Number(monthlyCarbonGoal);

    if (weeklyNum < 0 || monthlyNum < 0) {
      setUpdateStatus("Carbon goals cannot be negative.");
      return;
    }
    // Set the update status to show the user that the goals are being updated
    setUpdateStatus("Updating Carbon Goals...");

    // Call the context function to save to localStorage
    saveGoalsToLocalStorage(weeklyNum, monthlyNum);

    // Set the update status to show the user that the goals have been updated
    setTimeout(() => {
      setUpdateStatus("Carbon Goals Updated");
      setTimeout(() => {
        setUpdateStatus("");
      }, 2000);
    }, 1000);
  };

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

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-xl font-semibold mb-4">Set Your Goals</h2>
            {/* Set your weekly and monthly carbon goals to track your progress. */}
            <form onSubmit={handleSaveGoals} className="space-y-4">
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
              {/* Update Status */}
              {updateStatus && (
                <p
                  className={`mt-4 text-sm ${
                    updateStatus === "Carbon Goals Updated"
                      ? "text-green-700"
                      : "text-red-600"
                  }`}
                >
                  {updateStatus}
                </p>
              )}

              {/* Save Goals Button */}
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

          {/* Carbon Data and Guidelines */}
          <div className="flex-1">
            <CarbonData
              recordedWeeklyCarbon={goals.weekly}
              recordedMonthlyCarbon={goals.monthly}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSettings;
