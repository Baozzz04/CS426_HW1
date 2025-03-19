import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import GoalInput from "../components/GoalSettings/GoalInput";
import CarbonData from "../components/GoalSettings/CarbonData";

const GoalSettings: React.FC = () => {
  const [weeklyCarbonGoal, setWeeklyCarbonGoal] = useState<string>("");
  const [monthlyCarbonGoal, setMonthlyCarbonGoal] = useState<string>("");
  const [recordedWeeklyCarbon, setRecordedWeeklyCarbon] = useState<number>(0);
  const [recordedMonthlyCarbon, setRecordedMonthlyCarbon] = useState<number>(0);
  const [updateStatus, setUpdateStatus] = useState<string>("");

  useEffect(() => {
    const storedWeekly = localStorage.getItem("weeklyCarbonGoal");
    const storedMonthly = localStorage.getItem("monthlyCarbonGoal");
    if (storedWeekly) {
      setWeeklyCarbonGoal(storedWeekly);
      setRecordedWeeklyCarbon(Number(storedWeekly));
    }
    if (storedMonthly) {
      setMonthlyCarbonGoal(storedMonthly);
      setRecordedMonthlyCarbon(Number(storedMonthly));
    }
  }, []);

  const handleSaveGoals = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If either field is empty, display an error and stop
    if (!weeklyCarbonGoal.trim() || !monthlyCarbonGoal.trim()) {
      setUpdateStatus("Please fill in your weekly and monthly carbon goals.");
      return;
    }

    if (Number(weeklyCarbonGoal) < 0 || Number(monthlyCarbonGoal) < 0) {
      setUpdateStatus("Carbon goals cannot be negative.");
      return;
    }

    setUpdateStatus("Updating Carbon Goals...");

    localStorage.setItem("weeklyCarbonGoal", weeklyCarbonGoal);
    localStorage.setItem("monthlyCarbonGoal", monthlyCarbonGoal);

    setRecordedWeeklyCarbon(Number(weeklyCarbonGoal));
    setRecordedMonthlyCarbon(Number(monthlyCarbonGoal));

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

              {updateStatus && (
                <p
                  className={`
                    mt-4 text-sm
                    ${
                      updateStatus === "Updating Carbon Goals..."
                        ? "text-gray-700"
                        : updateStatus === "Carbon Goals Updated"
                        ? "text-green-700"
                        : "text-red-600"
                    }
                  `}
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
