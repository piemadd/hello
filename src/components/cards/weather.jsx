import LargeWeather from "./largeWeather"
import { useState, useEffect } from "react"

export default function WeatherCard() {

  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch('https://aptinfo.piemadd.repl.co/api')
      .then((req) => req.json())
      .then((data) => {
        setApiData(data);
        setIsLoading(false);
        console.log(data)
      })
  }, [])

  return isLoading ? (
    <section className="card primary-card" >
      <p>Loading...</p>
    </section>
  ) : (
    <section className="card primary-card">
      <h3>Weather</h3>
      {
        apiData.weather.hourly.periods.map((hour) => <LargeWeather weatherObject={hour} />)
      }
      <LargeWeather weatherObject={apiData.weather.hourly.periods[0]} />
    </section>
  )
};