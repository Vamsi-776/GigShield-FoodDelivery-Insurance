import React from "react";
import Dashboard from "../components/Dashboard";
import WeatherCard from "../components/WeatherCard";
import RiskCard from "../components/RiskCard";
import ClaimCard from "../components/ClaimCard";

function Home() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>GigShield Insurance Platform</h1>

      <Dashboard />
      <WeatherCard />
      <RiskCard />
      <ClaimCard />
    </div>
  );
}

export default Home;