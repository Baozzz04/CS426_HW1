import { useNavigate } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();

  // Shared styling for all navigation buttons
  const navButtonClasses =
    "flex items-center justify-center gap-4 h-16 w-[175px] border border-transparent text-primary font-normal text-lg rounded-2xl bg-tertiary transition-transform duration-300 ease-in-out active:scale-75 hover:brightness-90";

  return (
    <nav className="relative flex flex-col lg:flex-row items-center justify-center p-4 bg-tertiary text-primary shadow-md">
      {/* Logo Section */}
      <div className="flex items-center mb-4 lg:mb-0 lg:absolute lg:left-4 lg:top-1/2 lg:-translate-y-1/2">
        <img src="/Logo.png" alt="Logo" className="w-28 h-14 mr-2" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button className={navButtonClasses} onClick={() => navigate("/")}>
          <img src="/summary.svg" alt="Summary icon" className="w-11 h-11" />
          Summary
        </button>
        <button
          className={navButtonClasses}
          onClick={() => navigate("/activity-logging")}
        >
          <img src="/logging.svg" alt="Logging icon" className="w-11 h-11" />
          Logging
        </button>
        <button
          className={navButtonClasses}
          onClick={() => navigate("/goal-settings")}
        >
          <img src="/goals.svg" alt="Goals icon" className="w-11 h-11" />
          Goals
        </button>
        <button
          className={navButtonClasses}
          onClick={() => navigate("/resource-library")}
        >
          <img
            src="/resources.svg"
            alt="Resources icon"
            className="w-11 h-11"
          />
          Resources
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
