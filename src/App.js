import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceDirectory from "./pages/ServiceDirectory";
import DetailedActivityCard from "./components/DetailedActivityCard.js";
import { ServiceDirectoryProvider } from "./context/ServiceDirectoryContext";
import About from "./pages/About.js";
import SubmitActivity from "./pages/SubmitActivity";
import SuggestionsBox from "./pages/SuggestionsBox";

function App() {
  return (
    <ServiceDirectoryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ServiceDirectory />} />
          <Route path="/activity/:id" element={<DetailedActivityCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit-activity" element={<SubmitActivity />} />
          <Route path="/suggestions" element={<SuggestionsBox />} />
        </Routes>
      </Router>
    </ServiceDirectoryProvider>
  );
}

export default App;
