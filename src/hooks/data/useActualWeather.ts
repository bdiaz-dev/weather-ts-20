import { useEffect, useState } from 'react';
import windDirection from '@libs/windDirection';
import { useActualWeatherFetch } from '../fetch/useActualWeatherFetch';

const useActualWeather = ({ city, lang }: FetchParams) => {
  const { weatherData, error, loading } = useActualWeatherFetch({ city, lang });
  const [formattedWeather, setFormattedWeather] = useState<ActualWeatherFormat | null>(null);

  useEffect(() => {
    if (!weatherData) return;

    const formatData = () => {
      const actualWeatherMain = {
        country: weatherData.sys.country,
        icon: `/assets/weather/${weatherData.weather[0].icon}.svg`,
        description: weatherData.weather[0].description,
        temp: `${Math.round(weatherData.main.temp)}º`,
        code: (weatherData.weather[0].icon),
        cityFetch: weatherData.name,
      };

      const actualWeatherDetails = {
        maxTemp: `${Math.round(weatherData.main.temp_max)}º`,
        minTemp: `${Math.round(weatherData.main.temp_min)}º`,
        feelsLike: `${Math.round(weatherData.main.feels_like)}º`,
        windSpeed: `${Math.round(weatherData.wind.speed)}m/s`,
        direction: windDirection(Number(weatherData.wind.deg)),
        humidity: `${Math.round(weatherData.main.humidity)}%`,
      };

      const newFormatted: ActualWeatherFormat = {
        main: actualWeatherMain,
        details: actualWeatherDetails,
      };

      setFormattedWeather(newFormatted);
    };

    formatData();
  }, [weatherData]);
  return { formattedWeather, error, loading };
};

export { useActualWeather };
