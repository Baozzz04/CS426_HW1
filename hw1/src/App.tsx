import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ResourceLibrary from "./pages/ResourceLibrary";
import GoalSettings from "./pages/GoalSettings";
import ActivityLogging from "./pages/ActivityLogging";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource-library" element={<ResourceLibrary />} />
        <Route path="/goal-settings" element={<GoalSettings />} />
        <Route path="/activity-logging" element={<ActivityLogging />} />
      </Routes>
    </div>
  );
}

export default App;
