import { useNavigate } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();

  const navButtonClasses =
    "flex items-center justify-center gap-4 h-16 w-[175px] border border-transparent text-primary font-normal text-lg rounded-2xl bg-tertiary transition-transform duration-300 ease-in-out active:scale-75 hover:brightness-90";

  const navItems = [
    { label: "Summary", path: "/", icon: "/summary.svg", alt: "Summary icon" },
    {
      label: "Logging",
      path: "/activity-logging",
      icon: "/logging.svg",
      alt: "Logging icon",
    },
    {
      label: "Goals",
      path: "/goal-settings",
      icon: "/goals.svg",
      alt: "Goals icon",
    },
    {
      label: "Resources",
      path: "/resource-library",
      icon: "/resources.svg",
      alt: "Resources icon",
    },
  ];

  return (
    <nav className="relative flex flex-col lg:flex-row items-center justify-center p-4 bg-tertiary text-primary shadow-md">
      {/* Logo Section */}
      <div className="flex items-center mb-4 lg:mb-0 lg:absolute lg:left-4 lg:top-1/2 lg:-translate-y-1/2">
        <img src="/Logo.png" alt="Logo" className="w-28 h-14 mr-2" />
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={navButtonClasses}
            onClick={() => navigate(item.path)}
          >
            <img src={item.icon} alt={item.alt} className="w-11 h-11" />
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;
