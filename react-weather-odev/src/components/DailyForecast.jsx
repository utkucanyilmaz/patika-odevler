import React from "react";

function DailyForecast({ maxTemp, minTemp, icon, date }) {
  const currentTime = new Date().getDay();
  const day = new Date(date).getDay();
  const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div
      className={`flex flex-col p-4 text-center rounded ${
        currentTime === day && "bg-gray-50 border border-gray-300"
      }`}
    >
      <div className="text-lg text-gray-300 font-semibold">{daysArr[day]}</div>
      <div className="w-20 h-20 self-center">
        <img
          className="w-full h-full"
          src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
          alt=""
        />{" "}
      </div>
      <div className="flex flex-row items-center justify-around ">
        <div className="text-gray-600 font-medium">{Math.floor(maxTemp)}°</div>
        <div className="text-gray-400 font-medium">{Math.floor(minTemp)}°</div>
      </div>
    </div>
  );
}

export default DailyForecast;
