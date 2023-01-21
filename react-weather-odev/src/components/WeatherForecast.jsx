import { useEffect, useState } from "react";
import { useWeather } from "../context/WeatherContext";
import DailyForecast from "./DailyForecast";
import axios from "axios";

function WeatherForecast() {
  const [weather, setWeather] = useState(null);
  const { city } = useWeather();

  useEffect(() => {
    // axios(
    //   `https://api.weatherbit.io/v2.0/forecast/daily?key=892f31c5e9b84e69bb4a08e47db71c43&lat=${city.latitude}&lon=${city.longitude}&days=7&lang=tr`
    // )
    axios(
      `https://api.weatherbit.io/v2.0/forecast/daily?key=892f31c5e9b84e69bb4a08e47db71c43&city=${city.name},TR&days=7&lang=tr`
    )
      .then(data => {
        setWeather(data.data);
      })
      .catch(e => console.log(e.response));
  }, [city]);

  return (
    <div className="grid grid-cols-2 place-items-center sm:grid-cols-4 lg:grid-cols-7 gap-x-4">
      {weather &&
        weather.data.map((daily, index) => {
          return (
            <DailyForecast
              key={index}
              maxTemp={daily.high_temp}
              minTemp={daily.low_temp}
              icon={daily.weather.icon}
              date={daily.valid_date}
            />
          );
        })}
      {!weather && <div>Veri Bulunamadı.</div>}
    </div>
  );
}

export default WeatherForecast;
