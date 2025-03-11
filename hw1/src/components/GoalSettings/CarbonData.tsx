import { guidelines } from "../../utils/constants";

interface CarbonDataProps {
  recordedDailyCarbon: number;
  recordedWeeklyCarbon: number;
}

const CarbonData: React.FC<CarbonDataProps> = ({
  recordedDailyCarbon,
  recordedWeeklyCarbon,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Your Carbon Data</h2>
      <div className="space-y-2 mb-6">
        <p className="text-gray-700">
          <span className="font-bold">Recorded Daily Carbon:</span>{" "}
          {recordedDailyCarbon}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Recorded Weekly Carbon:</span>{" "}
          {recordedWeeklyCarbon}
        </p>
      </div>
      <div>
        <h3 className="text-md font-bold mb-2">Guidelines</h3>
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
