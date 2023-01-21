import React from "react";
import Dropdown from "./Dropdown";
import WeatherForecast from "./WeatherForecast";

function Content() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Dropdown />
      <WeatherForecast />
    </div>
  );
}

export default Content;
