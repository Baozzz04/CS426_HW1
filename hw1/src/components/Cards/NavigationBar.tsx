import { Button } from "../FormElements";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between p-3 bg-tertiary text-primary shadow-md">
      <div className="flex flex-col items-center ml-4">
        <img src="/Logo.png" alt="Logo" className="w-34 h-14" />
        <span className="text-xl font-bold">CarbonSense</span>
      </div>

      <div className="flex space-x-4 flex-grow ml-52">
        <Button
          value="Summary"
          textColor="text-primary"
          width={175}
          bgColor="bg-tertiary"
          borderColor="border-transparent"
          img="/summary.svg"
          height="h-16"
          handleClick={() => navigate("/")}
        />
        <Button
          value="Logging"
          textColor="text-primary"
          width={175}
          bgColor="bg-tertiary"
          borderColor="border-transparent"
          img="/logging.svg"
          height="h-16"
          handleClick={() => navigate("/activity-logging")}
        />
        <Button
          value="Goals"
          textColor="text-primary"
          width={175}
          bgColor="bg-tertiary"
          borderColor="border-transparent"
          img="/goals.svg"
          height="h-16"
          handleClick={() => navigate("/goal-settings")}
        />
        <Button
          value="Resources"
          textColor="text-primary"
          width={175}
          bgColor="bg-tertiary"
          borderColor="border-transparent"
          img="/resources.svg"
          height="h-16"
          handleClick={() => navigate("/resource-library")}
        />
      </div>
    </nav>
  );
};

export default NavigationBar;
