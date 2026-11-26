import { useState, useEffect } from "react";
import axios from "axios";

const CountryDetail = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const capital = country.capital?.[0] || "N/A";
  const languages = Object.values(country.languages || {});
  const coords = country.capitalInfo?.latlng || country.latlng;

  useEffect(() => {
    if (!apiKey || !coords || coords.length < 2) return;

    const [lat, lon] = coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios
      .get(url)
      .then((response) => setWeather(response.data))
      .catch((err) => {
        console.error("Weather fetch failed:", err);
        setWeather(null);
      });
  }, [country, apiKey, coords]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {capital}</div>
      <div>area {country.area}</div>

      <h3>languages:</h3>
      <ul>
        {languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>

      <img
        src={country.flags.png}
        alt={country.flags.alt || `Flag of ${country.name.common}`}
        width="160"
      />

      {weather && (
        <div>
          <h2>Weather in {capital}</h2>
          <div>temperature {weather.main.temp} Celsius</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <div>wind {weather.wind.speed} m/s</div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
