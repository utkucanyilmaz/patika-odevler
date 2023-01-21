import { useContext, createContext, useState } from "react";

import data from "../assets/data.json";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [cities, setCities] = useState(data);
  const [selectedCity, setSelectedCity] = useState("İzmir");
  const city = data.find(city => city.name === selectedCity);

  const values = {
    selectedCity,
    setSelectedCity,
    city,
    cities,
    setCities,
  };
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
