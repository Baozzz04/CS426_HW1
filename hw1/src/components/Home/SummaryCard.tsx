interface SummaryCardProps {
  title: string;
  value: number | string;
  color: string;
  unit?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  color,
  unit = "kg",
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className={`text-2xl font-bold mt-2 text-${color}-500`}>
        {value} {unit}
      </p>
    </div>
  );
};

export default SummaryCard;
