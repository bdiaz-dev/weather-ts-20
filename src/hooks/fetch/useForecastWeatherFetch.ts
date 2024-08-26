import { useEffect, useState } from 'react';
import { ForecastDataFetch } from '../../types/dataFetch';

const useForecastWeatherFetch = ({ city, lang }: FetchParams) => {
  const [forecastWeatherData, setForecastWeatherData] = useState<ForecastDataFetch | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchForecastWeather = async () => {
      const urlForFetch = `${import.meta.env.VITE_URL_BASE}forecast?q=${city}&lang=${lang}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
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
  }, [city, lang]);

  return { forecastWeatherData, loading, error };
};

export { useForecastWeatherFetch };
