import React from "react";
import "./App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import GreetingsSection from "./components/layout/GreetingsSection/GreetingsSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GreetingsSection />
    </div>
  );
}

export default App;
