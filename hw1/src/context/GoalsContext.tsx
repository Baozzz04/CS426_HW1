import React, { createContext, useState, useEffect, useContext } from "react";

interface Goals {
  weekly: number;
  monthly: number;
}

interface GoalsContextProps {
  goals: Goals;
  setGoals: React.Dispatch<React.SetStateAction<Goals>>;
  loadGoalsFromLocalStorage: () => void;
  saveGoalsToLocalStorage: (weekly: number, monthly: number) => void;
}

const GoalsContext = createContext<GoalsContextProps | undefined>(undefined);

export const GoalsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [goals, setGoals] = useState<Goals>({ weekly: 0, monthly: 0 });

  // Load any saved goals from localStorage
  useEffect(() => {
    loadGoalsFromLocalStorage();
  }, []);

  // Function to load goals from Local Storage
  const loadGoalsFromLocalStorage = () => {
    const storedWeekly = localStorage.getItem("weeklyCarbonGoal");
    const storedMonthly = localStorage.getItem("monthlyCarbonGoal");

    setGoals({
      weekly: storedWeekly ? Number(storedWeekly) : 0,
      monthly: storedMonthly ? Number(storedMonthly) : 0,
    });
  };

  // Function to save goals to Local Storage
  const saveGoalsToLocalStorage = (weekly: number, monthly: number) => {
    localStorage.setItem("weeklyCarbonGoal", String(weekly));
    localStorage.setItem("monthlyCarbonGoal", String(monthly));
    setGoals({ weekly, monthly });
  };

  return (
    <GoalsContext.Provider
      value={{
        goals,
        setGoals,
        loadGoalsFromLocalStorage,
        saveGoalsToLocalStorage,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

// Custom hook for easy access to GoalsContext
export const useGoals = (): GoalsContextProps => {
  const context = useContext(GoalsContext);
  if (!context) {
    throw new Error("Error found!");
  }
  return context;
};
