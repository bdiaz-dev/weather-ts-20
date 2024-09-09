/* eslint-disable react-hooks/exhaustive-deps */
// dependency lang removed on useEffect, it cause's innecesary rerenders

import { useEffect, useState } from 'react';
import windDirection from '@libs/windDirection';
import dateFix from '@libs/datefix';
import { useForecastWeatherFetch } from '../fetch/useForecastWeatherFetch';
import { ForecastDataFetchList } from '../../types/dataFetch';

const useForecastWeather = ({ city, lang }: FetchParams) => {
  const [formattedForecast, setFormattedForecast] = useState<ForecastWeatherFormat | []>([]);
  const { forecastWeatherData, loading, error } = useForecastWeatherFetch({ city, lang });

  useEffect(() => {
    if (!forecastWeatherData) return;

    const formatData = () => {
      const forecastWeather = forecastWeatherData.list.map((el: ForecastDataFetchList) => ({
        date: dateFix({ dt: el.dt_txt.substring(0, 10), lang }),
        largeDate: el.dt_txt.substring(0, 10),
        hour: el.dt_txt.substring(11, 16),
        icon: `/assets/weather/${el.weather[0].icon}.svg`,
        description: el.weather[0].description,
        cityFetch: forecastWeatherData.city.name,
        temp: ` ${Math.round(el.main.temp)}º`,
        pop: `${(el.pop) * 100} %`,
        windSpeed: `${Math.round(el.wind.speed)}m/s`,
        direction: windDirection(Number(el.wind.deg)),
        feelsLike: `${Math.round(el.main.feels_like)}º`,
        humidity: `${Math.round(el.main.humidity)} %`,
      }));

      setFormattedForecast(forecastWeather);
    };
    formatData();
  }, [forecastWeatherData]);

  return { formattedForecast, loading, error };
};

export { useForecastWeather };
