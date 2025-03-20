import { useState, useEffect } from "react";

export const useCarbonGoals = () => {
  // List of states for carbon goals, including weekly and monthly goals
  const [weeklyCarbonGoal, setWeeklyCarbonGoal] = useState<string>("");
  const [monthlyCarbonGoal, setMonthlyCarbonGoal] = useState<string>("");
  const [recordedWeeklyCarbon, setRecordedWeeklyCarbon] = useState<number>(0);
  const [recordedMonthlyCarbon, setRecordedMonthlyCarbon] = useState<number>(0);
  const [updateStatus, setUpdateStatus] = useState<string>("");

  // Pulling the data from Local Storage for carbon goals
  useEffect(() => {
    const storedWeekly = localStorage.getItem("weeklyCarbonGoal");
    const storedMonthly = localStorage.getItem("monthlyCarbonGoal");
    // Set the record only if the goals are available
    if (storedWeekly) {
      setWeeklyCarbonGoal(storedWeekly);
      setRecordedWeeklyCarbon(Number(storedWeekly));
    }
    if (storedMonthly) {
      setMonthlyCarbonGoal(storedMonthly);
      setRecordedMonthlyCarbon(Number(storedMonthly));
    }
  }, []);

  // Function to save the carbon goals to Local Storage
  const saveGoals = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validating the inputs, checking if they are empty or negative
    if (!weeklyCarbonGoal.trim() || !monthlyCarbonGoal.trim()) {
      setUpdateStatus("Please fill in your weekly and monthly carbon goals.");
      return;
    }
    if (Number(weeklyCarbonGoal) < 0 || Number(monthlyCarbonGoal) < 0) {
      setUpdateStatus("Carbon goals cannot be negative.");
      return;
    }
    // Updating the status message
    setUpdateStatus("Updating Carbon Goals...");
    // Saving the goals to Local Storage
    localStorage.setItem("weeklyCarbonGoal", weeklyCarbonGoal);
    localStorage.setItem("monthlyCarbonGoal", monthlyCarbonGoal);
    // Setting the recorded goals to the new ones
    setRecordedWeeklyCarbon(Number(weeklyCarbonGoal));
    setRecordedMonthlyCarbon(Number(monthlyCarbonGoal));
    // Updating the status message
    setTimeout(() => {
      setUpdateStatus("Carbon Goals Updated");
      setTimeout(() => {
        setUpdateStatus("");
      }, 2000);
    }, 1000);
  };

  return {
    weeklyCarbonGoal,
    setWeeklyCarbonGoal,
    monthlyCarbonGoal,
    setMonthlyCarbonGoal,
    recordedWeeklyCarbon,
    recordedMonthlyCarbon,
    updateStatus,
    saveGoals,
  };
};
