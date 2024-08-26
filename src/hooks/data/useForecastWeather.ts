/* eslint-disable react-hooks/exhaustive-deps */
// dependency lang removed on useEffect, it cause's innecesary rerenders

import { useEffect, useState } from 'react';
import { useForecastWeatherFetch } from '../fetch/useForecastWeatherFetch';
import { ForecastWeatherFormat } from '../../types/dataFormat';
import { ForecastDataFetchList } from '../../types/dataFetch';
import dateFix from '../../libs/datefix';

const useForecastWeather = ({ city, lang }: FetchParams) => {
  const [formattedForecast, setFormattedForecast] = useState<ForecastWeatherFormat | []>([]);
  const { forecastWeatherData, loading, error } = useForecastWeatherFetch({ city, lang });

  useEffect(() => {
    if (!forecastWeatherData) return;

    const formatData = () => {
      const forecastWeather = forecastWeatherData.list.map((el: ForecastDataFetchList) => ({
        date: dateFix({ dt: el.dt_txt.substring(0, 10), lang }),
        hour: el.dt_txt.substring(11, 16),
        icon: `${import.meta.env.VITE_ICONS_URL_BASE}${el.weather[0].icon}.png`,
        description: el.weather[0].description,
        temp: ` ${Math.round(el.main.temp)}º`,
      }));

      setFormattedForecast(forecastWeather);
    };
    formatData();
  }, [forecastWeatherData]);

  return { formattedForecast, loading, error };
};

export { useForecastWeather };
