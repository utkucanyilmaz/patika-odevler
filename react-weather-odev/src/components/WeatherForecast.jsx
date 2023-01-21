import { useEffect, useState } from "react";
import { useWeather } from "../context/WeatherContext";
import axios from "axios";

function WeatherForecast() {
  const [weather, setWeather] = useState();
  const { city } = useWeather();
  useEffect(() => {
    axios(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&timezone=Europe%2FMoscow&daily=weathercode,temperature_2m_max,temperature_2m_min`
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
