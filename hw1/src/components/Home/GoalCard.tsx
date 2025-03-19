import React from "react";

interface GoalCardProps {
  title: string;
  currentValue: number; // e.g. current usage
  goalValue: number; // e.g. weekly or monthly goal
  unit?: string; // default = "kg"
}

export interface Goals {
  weekly: number;
  monthly: number;
}

const GoalCard: React.FC<GoalCardProps> = ({
  title,
  currentValue,
  goalValue,
  unit = "kg",
}) => {
  // Handle edge cases: avoid division by zero
  if (goalValue === 0) {
    return (
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold mt-2">
          {currentValue} {unit}
        </p>
        <p className="mt-2 text-gray-500 italic">No goal set</p>
      </div>
    );
  }

  // Calculate difference and percentage
  const diff = currentValue - goalValue;
  const percentageDiff = (diff / goalValue) * 100;

  // Determine arrow symbol & color
  const isAboveGoal = diff > 0;
  const arrowSymbol = isAboveGoal ? "▲" : "▼";
  const diffColor = isAboveGoal ? "text-red-600" : "text-green-600";

  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      {/* Display the current usage */}
      <p className="text-2xl font-bold mt-2">
        {currentValue} {unit}
      </p>
      {/* Display the goal */}
      <p className="text-sm text-gray-600">
        Goal: {goalValue} {unit}
      </p>
      {/* Display the percentage difference */}
      <p className={`mt-2 font-medium ${diffColor}`}>
        {arrowSymbol} {Math.abs(percentageDiff).toFixed(1)}%
      </p>
    </div>
  );
};

export default GoalCard;
