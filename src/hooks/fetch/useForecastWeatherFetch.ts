import { useEffect, useState } from 'react';
import { ForecastDataFetch } from '../../types/dataFetch';
import { getCountry } from '../../libs/cities';

const useForecastWeatherFetch = ({ city, lang }: FetchParams) => {
  const urlBase = import.meta.env.VITE_URL_BASE;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [forecastWeatherData, setForecastWeatherData] = useState<ForecastDataFetch | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const country = getCountry(city);

  useEffect(() => {
    let isMounted = true;

    const fetchForecastWeather = async () => {
      const urlForFetch = `${urlBase}forecast?q=${city},${country}&lang=${lang}&units=metric&appid=${apiKey}`;
      try {
        setLoading(true);
        const res = await fetch(urlForFetch);
        if (!res.ok) throw new Error('Failed to fetch forecast weather data');
        const data = await res.json();
        if (isMounted) {
          setForecastWeatherData(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
          setForecastWeatherData(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchForecastWeather();

    return () => {
      isMounted = false;
    };
  }, [apiKey, city, country, lang, urlBase]);

  return { forecastWeatherData, loading, error };
};

export { useForecastWeatherFetch };
