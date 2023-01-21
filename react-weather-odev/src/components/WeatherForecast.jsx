import { useEffect, useState } from "react";
import { useWeather } from "../context/WeatherContext";
import axios from "axios";

function WeatherForecast() {
  const [weather, setWeather] = useState();

  const { city } = useWeather();
  useEffect(() => {
    axios(
      `https://api.weatherbit.io/v2.0/forecast/daily?key=892f31c5e9b84e69bb4a08e47db71c43&lat=${city.latitude}&lon=${city.longitude}&days=7`
    )
      .then(data => {
        console.log(data.data);
        setWeather(data.data);
      })
      .catch(e => console.log(e.response));
  }, [city]);

  return <div></div>;
}

export default WeatherForecast;
