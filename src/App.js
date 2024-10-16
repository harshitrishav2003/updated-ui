import React, { useState } from 'react';
import './App.css';
import StatsPanel from './components/StatsPanel';
import Navbar from './components/Navbar';  
import MapComponent from './components/MapComponent';
import Sidebar from './components/Sidebar';  

function App() {
  const [attackSpeed, setAttackSpeed] = useState(1500); 

  const handleSpeedChange = (newSpeed) => {
    setAttackSpeed(newSpeed); 
  };

  return (
    <div className="App">
      <div className="top-border"></div>
      <Navbar />
      <div className="content">
        <MapComponent attackSpeed={attackSpeed} /> 
      </div>
      <div className="stats-panel">
        <StatsPanel />
      </div>
      <Sidebar handleSpeedChange={handleSpeedChange} />
    </div>
  );
}

export default App;
