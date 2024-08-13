import { useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  async function fetchWeatherdata(param) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        
      );
      const data = await res.json()
      console.log(data, 'data');
      
    } catch (e) {}
  }

   function handleSearch() {
        fetchWeatherdata(search)
  }

  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
    </div>
  );
}
