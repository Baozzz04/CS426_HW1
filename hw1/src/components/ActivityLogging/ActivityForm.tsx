import { ChangeEvent, FormEvent, useState } from "react";
import { Activity, activities } from "../../utils/constants";

interface ActivityFormProps {
  onLogActivity: (activity: Activity) => void;
}

export const ActivityForm: React.FC<ActivityFormProps> = ({
  onLogActivity,
}) => {
  // Lists of all the states (FormData, status, error)
  const [formData, setFormData] = useState({
    activityName: "",
    activityType: "",
    activityDate: "",
    carbonProduced: "",
  });
  const [updateStatus, setUpdateStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Functions to update the states
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Function to update the activity type and carbon produced
  const handleActivityTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;
    const selectedActivity = activities.find(
      (activity) => activity.type === selectedType
    );
    setFormData((prev) => ({
      ...prev,
      activityType: selectedType,
      carbonProduced: selectedActivity
        ? selectedActivity.carbonValue.toString()
        : "",
    }));
  };

  // Function to log the activity
  const handleLogActivity = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.activityName ||
      !formData.activityType ||
      !formData.activityDate
    ) {
      setError("Activity Name, Activity Type, and Activity Date are required.");
      return;
    }
    setError("");
    setUpdateStatus("Logging Activity...");
    const newActivity: Activity = {
      name: formData.activityName,
      date: formData.activityDate,
      type: formData.activityType,
      avgCarbon: parseFloat(formData.carbonProduced),
    };
    onLogActivity(newActivity);
    setFormData({
      activityName: "",
      activityType: "",
      activityDate: "",
      carbonProduced: "",
    });
    setTimeout(() => {
      setUpdateStatus("Activity Logged");
      setTimeout(() => {
        setUpdateStatus("");
      }, 2000);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleLogActivity}
      className="bg-white shadow-md rounded-xl px-8 py-6 flex-1"
    >
      <h2 className="text-xl font-semibold mb-4">Log Your Activity</h2>
      {/* Activity Name Field */}
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
          value={formData.activityName}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      {/* Activity Type Field */}
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
            value={formData.activityType}
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

        {/* Date Fields */}
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
            value={formData.activityDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
        </div>

        {/* Carbon Produced Field */}
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
            value={formData.carbonProduced}
            readOnly
            className="w-full p-2 border rounded-lg bg-gray-100"
          />
        </div>
      </div>

      {/* Error and Update Status Messages */}
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      {updateStatus && (
        <p
          className={`mb-4 text-sm ${
            updateStatus === "Activity Logged"
              ? "text-green-700"
              : "text-gray-700"
          }`}
        >
          {updateStatus}
        </p>
      )}

      {/* Log Activity Button */}
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
