import { useEffect, useState } from 'react';
import { useActualWeatherFetch } from '../fetch/useActualWeatherFetch';
import { ActualWeatherFormat } from '../../types/dataFormat';
import windDirection from '../../libs/windDirection';

const useActualWeather = ({ city, lang }: FetchParams) => {
  const { weatherData, error, loading } = useActualWeatherFetch({ city, lang });
  const [formattedWeather, setFormattedWeather] = useState<ActualWeatherFormat | null>(null);

  useEffect(() => {
    if (!weatherData) return;

    const formatData = () => {
      const actualWeatherMain = {
        country: weatherData.sys.country,
        icon: `${import.meta.env.VITE_ICONS_URL_BASE}${weatherData.weather[0].icon}@4x.png`,
        description: weatherData.weather[0].description,
        temp: `${Math.round(weatherData.main.temp)}º`,
      };

      const actualWeatherDetails = {
        maxTemp: `${Math.round(weatherData.main.temp_max)}º`,
        minTemp: `${Math.round(weatherData.main.temp_min)}º`,
        feelsLike: `${Math.round(weatherData.main.feels_like)}º`,
        windSpeed: `${Math.round(weatherData.wind.speed)} Km/h`,
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
