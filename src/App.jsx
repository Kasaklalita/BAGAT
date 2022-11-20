import React from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import GreetingsSection from "./components/layout/GreetingsSection/GreetingsSection";
import ContentSection from "./components/layout/ContentSection/ContentSection";
import AboutSection from "./components/layout/AboutSection/AboutSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GreetingsSection />
      <AboutSection></AboutSection>
    </div>
  );
}

export default App;
