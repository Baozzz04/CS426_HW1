import { ChangeEvent, FormEvent, useState } from "react";
import { Activity, activities } from "../../utils/constants";

interface ActivityFormProps {
  onLogActivity: (activity: Activity) => void;
}

export const ActivityForm: React.FC<ActivityFormProps> = ({
  onLogActivity,
}) => {
  const [activityName, setActivityName] = useState("");
  const [activityType, setActivityType] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [carbonProduced, setCarbonProduced] = useState("");

  const handleLogActivity = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newActivity: Activity = {
      name: activityName,
      date: activityDate,
      type: activityType,
      avgCarbon: parseFloat(carbonProduced),
    };
    onLogActivity(newActivity);
    console.log(
      "Activity logged:",
      activityName,
      activityType,
      activityDate,
      carbonProduced
    );
    setActivityName("");
    setActivityType("");
    setActivityDate("");
    setCarbonProduced("");
  };

  const handleActivityTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;
    const selectedActivity = activities.find(
      (activity) => activity.type === selectedType
    );
    if (selectedActivity) {
      setActivityType(selectedType);
      setCarbonProduced(selectedActivity.carbonValue.toString());
    } else {
      setActivityType("");
      setCarbonProduced("");
    }
  };

  return (
    <form
      onSubmit={handleLogActivity}
      className="bg-white shadow-md rounded-xl px-8 py-6 flex-1"
    >
      <h2 className="text-xl font-semibold mb-4">Log Your Activity</h2>
      <div className="mb-4">
        <label
          htmlFor="activityName"
          className="block text-gray-700 font-bold mb-2"
        >
          Name of the Activity
        </label>
        <input
          id="activityName"
          type="text"
          placeholder="Name of activity"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label
            htmlFor="activityType"
            className="block text-gray-700 font-bold mb-2"
          >
            Type of the Activity
          </label>
          <select
            id="activityType"
            value={activityType}
            onChange={handleActivityTypeChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
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
            htmlFor="activityDate"
            className="block text-gray-700 font-bold mb-2"
          >
            Date of the Activity
          </label>
          <input
            id="activityDate"
            type="date"
            value={activityDate}
            onChange={(e) => setActivityDate(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>
        <div>
          <label
            htmlFor="carbonProduced"
            className="block text-gray-700 font-bold mb-2"
          >
            Carbon Produced
          </label>
          <input
            id="carbonProduced"
            type="text"
            value={carbonProduced}
            readOnly
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-primary hover:brightness-90 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-200 ease-in-out active:scale-95"
        >
          Log Activity
        </button>
      </div>
    </form>
  );
};
