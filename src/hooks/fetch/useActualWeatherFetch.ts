import { useEffect, useState } from 'react';
import { ActualDataFetch } from '../../types/dataFetch';
import { getCountry } from '../../libs/cities';

const useActualWeatherFetch = ({ city, lang }: FetchParams) => {
  const urlBase = import.meta.env.VITE_URL_BASE;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [weatherData, setWeatherData] = useState<ActualDataFetch | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const country = getCountry(city);

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      const urlForFetch = `${urlBase}weather?q=${city},${country}&lang=${lang}&units=metric&appid=${apiKey}`;
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
        if (isMounted) setLoading(false);
      }
    };
    fetchWeather();

    return () => {
      isMounted = false;
    };
  }, [city, lang, country, urlBase, apiKey]);

  return { weatherData, loading, error };
};

export { useActualWeatherFetch };
