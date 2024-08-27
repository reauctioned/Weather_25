import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWeatherdata(param) {
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`
      )
      if (!res.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await res.json();
      setWeather(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch() {
    fetchWeatherdata(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherdata("austin");
  }, []);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="pb-10">Loading...</div>
      ) : error ? (
        <div className="pb-10">Error: {error}</div>
      ) : (
        <div>
          <div className="city-name mb-10">
            <h2>
              {weather?.name}, <span>{weather?.sys?.country}</span>
            </h2>
          </div>
          <div className="date text-xl italic font-medium">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp text-6xl">
            {weather?.main?.temp ? ((weather.main.temp - 273.15).toFixed(2)) : "N/A"}°C
          </div>
          <p className="weather-desc text-xl font-medium mt-0 mb-0">
            {weather?.weather?.[0]?.description || ""}
          </p>
          <div className="weather-info flex justify-evenly items-center mt-5 py-[30px] px-[20px]">
            <div>
              <div>
                <p>Wind Speed</p>
                <p className="weather-info-wind">{weather?.wind?.speed}</p>
              </div>
            </div>
            <div>
              <div>
                <p>Humidity</p>
                <p className="weather-info-humidity">
                  {weather?.main?.humidity}%
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}