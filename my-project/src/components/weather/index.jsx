import { useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);

  async function fetchWeatherdata(param) {
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=7b596558a7303ebc6ee740a6761636f1`
        
      );
      const data = await res.json()
      console.log(data, 'data');
      if(data)
      {
        setLoading(false)
        setWeather(data)
    }
    
} catch (e) {console.log(e);
    setLoading(false)
    }
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
