import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  async function fetchWeatherdata(param) {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=7b596558a7303ebc6ee740a6761636f1`
      );
      const data = await res.json();
      console.log(data, "data");
      if (data) {
        setLoading(false);
        setWeather(data);
      }
    } catch (e) {
      console.log(e);
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
  console.log(weather);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weather?.name}, <span>{weather?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div>{weather?.main?.temp}</div>
          <p className="weather-desc">
            {
              weather && weather.weather && weather.weather[0] ? weather.weather[0].description : ''
            }
            </p>
            <div className="weather-info">
              <div>
                <div>
                  <p className="weather-info-wind">
                    {
                      weather?.wind?.speed
                    }
                    </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="weather-info-humidity">
                    {
                      weather?.main?.humidity
                    }%
                    </p>
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}
