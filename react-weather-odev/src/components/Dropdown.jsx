import React from "react";
import { useWeather } from "../context/WeatherContext";

function Dropdown() {
  const { selectedCity, setSelectedCity, cities } = useWeather();
  const handleChange = e => {
    setSelectedCity(e.target.value);
  };
  return (
    <div className="bg-blue-50 p-4 w-[500px]">
      <select
        defaultValue={selectedCity}
        onChange={handleChange}
        name="cities"
        id=""
      >
        {cities.map(city => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
