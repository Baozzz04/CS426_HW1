import React from "react";
import { Activity, headers } from "../../utils/constants";

interface LoggedActivitiesProps {
  activitiesData: Activity[];
}

export const LoggedActivities: React.FC<LoggedActivitiesProps> = ({
  activitiesData,
}) => {
  return (
    // This is the Logged Activities Section, displaying all activities, including activity name, activity date, activity type, and activity carbon footprint
    <div className="flex-1 bg-white shadow-md rounded-xl p-4">
      <h2 className="text-xl font-semibold mb-4">Logged Activities</h2>
      <div className="overflow-x-auto">
        <div className="max-h-60 overflow-y-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="py-2 px-4 text-left text-sm font-medium text-gray-700"
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activitiesData.map((activity, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition-colors"
                >
                  {headers.map((header, index) => (
                    <td key={index} className="py-2 px-4 text-sm text-gray-700">
                      {activity[header.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
