import React from "react";
import Dropdown from "./Dropdown";
import WeatherForecast from "./WeatherForecast";

function Content() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen container mx-auto">
      <div className="flex flex-col gap-y-4">
        <Dropdown />
        <WeatherForecast />
      </div>
    </div>
  );
}

export default Content;
