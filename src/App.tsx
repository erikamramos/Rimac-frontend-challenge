import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "@/context/UserContext";
import Home from "./pages/Home/Home";
import Plans from "./pages/Plans/Plans";
import Summary from "./pages/Summary/Summary";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
