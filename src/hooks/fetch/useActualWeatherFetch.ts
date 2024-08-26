import { useEffect, useState } from 'react';
import { ActualDataFetch } from '../../types/dataFetch';

const useActualWeatherFetch = ({ city, lang }: FetchParams) => {
  const [weatherData, setWeatherData] = useState<ActualDataFetch | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      const urlForFetch = `${import.meta.env.VITE_URL_BASE}weather?q=${city}&lang=${lang}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;
      try {
        setLoading(true);
        const res = await fetch(urlForFetch);
        if (!res.ok) throw new Error('Failed to fetch actual weather data');
        const data = await res.json();
        if (isMounted) {
          setWeatherData(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
          setWeatherData(null);
        }
      } finally {
        // if (isMounted) setLoading(false);
      }
    };
    fetchWeather();

    return () => {
      isMounted = false;
    };
  }, [city, lang]);

  return { weatherData, loading, error };
};

export { useActualWeatherFetch };
