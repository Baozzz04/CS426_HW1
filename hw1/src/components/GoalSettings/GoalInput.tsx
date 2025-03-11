import { ChangeEvent } from "react";

interface GoalInputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const GoalInput: React.FC<GoalInputProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={id} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <input
      type="number"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
    />
  </div>
);

export default GoalInput;
