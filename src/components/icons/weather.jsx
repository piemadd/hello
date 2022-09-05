export default function WeatherIcon({weatherObject}) {
  let icon = 'sunny';
  const time = new Date(weatherObject.startTime);
  if (weatherObject.temperature < 45) {
    icon = 'ac_unit';

    if (weatherObject.probabilityOfPrecipitation > 30) {
      icon = 'weather_snowy'
    }

    if (weatherObject.temperature < 0) {
      icon = 'severe_cold'
    }
  }

  if (time.getHours() > 20) {
    icon = 'clear_night'
  }

  if (weatherObject.skyCover > 30) {
    icon = 'partly_cloudy_day'

    if (weatherObject.skyCover > 70) {
      icon = 'cloudy'
    }

    if (time.getHours() > 20) {
      icon = 'partly_cloudy_night'
    }
  }

  if (weatherObject.probabilityOfPrecipitation > 30) {
    icon = 'rainy'
  }

  if (Number(weatherObject.windSpeed.split(' ')[0]) > 11) {
    icon = 'air'

    if (weatherObject.probabilityOfPrecipitation > 30) {
      icon = 'thunderstorm'
    }
  }

  return (
    <span class="material-symbols-outlined largeIcon">
      {icon}
    </span>
  )
}