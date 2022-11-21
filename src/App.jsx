import React from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import GreetingsSection from "./components/layout/GreetingsSection/GreetingsSection";
import ContentSection from "./components/layout/ContentSection/ContentSection";
import AboutSection from "./components/layout/AboutSection/AboutSection";
import WorkingWithUsSection from "./components/layout/WorkingWithUsSection/WorkingWithUsSection";
import DirectionsSection from "./components/layout/DirectionsSection/DirectionsSection.jsx";
import OurAdvantagesSection from "./components/layout/OurAdvantagesSection/OurAdvantagesSection.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GreetingsSection />
      <AboutSection />
      <div style={{ background: "#F6F6F6" }}>
        <WorkingWithUsSection />
      </div>
      <DirectionsSection></DirectionsSection>
      <div style={{ background: "#F6F6F6" }}>
        <OurAdvantagesSection />
      </div>
    </div>
  );
}

export default App;
