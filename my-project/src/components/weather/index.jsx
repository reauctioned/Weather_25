import { useState } from "react";
import Search from "../search";

export default function Weather(){
    const [search,setSearch] = useState('')
    const [loading,setLoading] = useState(false)
    const [weather,setWeather] = useState(null)

    async function fetchWeatherdata(){
            try{
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid={API key}`)
            }catch(e){

            }
    }

    async  function handleSearch(){

    }

    return(
        <div>
          <Search search={search} setSearch={setSearch}/>
        </div>
    )
}