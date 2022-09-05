import WeatherIcon from "../icons/weather"

export default function LargeWeather({ weatherObject }) {
  const windDirectionDict = {
    N: "north",
    NNE: "north_east",
    NE: "north_east",
    ENE: "north_east",
    E: "east",
    ESE: "south_east",
    SE: "south_east",
    SSE: "south_east",
    S: "south",
    SSW: "south_west",
    SW: "south_west",
    WSW: "south_west",
    W: "west",
    WNW: "north_west",
    NW: "north_west",
    NNW: "north_west",
  };

  const now = new Date(weatherObject.startTime);
  return (
    <div className="card secondary-card">
      <div className="row" style={{
        fontSize: '22px',
      }}>
        <p>{now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
        <p>&nbsp;|&nbsp;</p>
        <span class="material-symbols-outlined icon">{windDirectionDict[weatherObject.windDirection]}</span>
        <p>&nbsp;{weatherObject.windSpeed}</p>
      </div>
      <div className="row">

        <WeatherIcon weatherObject={weatherObject} />
        <p style={{
          marginLeft: '6px'
        }} className="large">{weatherObject.temperature}°F</p>

      </div>
      <div className="row">
        <p>{weatherObject.shortForecast}&nbsp;|&nbsp;</p>
        <p>Feels Like {weatherObject.apparentTemperature}{weatherObject.apparentTemperatureUnit}</p>
      </div>

      <div className="row">
        <p>{weatherObject.probabilityOfPrecipitation ? weatherObject.probabilityOfPrecipitation : '0'}% Chance of Precipitation</p>
      </div>

    </div>

  )
}