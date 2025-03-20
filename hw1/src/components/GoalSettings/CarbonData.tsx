import { guidelines } from "../../utils/constants";

interface CarbonDataProps {
  recordedWeeklyCarbon: number;
  recordedMonthlyCarbon: number;
}

const CarbonData: React.FC<CarbonDataProps> = ({
  recordedWeeklyCarbon,
  recordedMonthlyCarbon,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Your Carbon Data</h2>
      {/* This is the Recorded Carbon Data */}
      <div className="space-y-2 mb-6">
        <p className="text-gray-700">
          <span className="font-bold">Recorded Weekly Carbon Produced:</span>{" "}
          {recordedWeeklyCarbon}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Recorded Monthly Carbon Produced:</span>{" "}
          {recordedMonthlyCarbon}
        </p>
      </div>

      {/* This is the Weekly Carbon Emission Guidelines */}
      <div>
        <h3 className="text-md font-bold mb-2">
          Weekly Carbon Emission Guidelines
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {guidelines.map((item, index) => (
            <li key={index}>
              <span className="font-semibold">{item.label}:</span> {item.range}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarbonData;
