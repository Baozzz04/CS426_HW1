import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { GoalsProvider } from "./context/GoalsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GoalsProvider>
        <App />
      </GoalsProvider>
    </BrowserRouter>
  </StrictMode>
);
