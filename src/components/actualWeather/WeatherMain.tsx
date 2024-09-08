import { useCity } from '@context/CityContext';
import { useLanguage } from '@context/LanguageContext';
import useNoOpacity from '@hooks/faderAnimation/useNoOpacity';
import { setCityName } from '@libs/cities';
import WeatherDetails from './WeatherDetails';

interface WeatherMainParams { weatherData: ActualWeatherFormat }

export default function WeatherMain({ weatherData }: WeatherMainParams) {
  const { lang } = useLanguage();
  const { city } = useCity();
  const cityInLang = setCityName({ selectedCity: city, lang });
  const mainRef = useNoOpacity<HTMLDivElement>({
    data: weatherData, city: cityInLang, timeout: 1000,
  });

  return (
    <div id="weatherMain" ref={mainRef}>
      <h2 data-testid="cityTitle">{`${cityInLang} ${weatherData.main.country}`}</h2>
      <span className="weatherTemp">
        {weatherData.main.temp}
      </span>
      <div className="weatherDescriptionContainer">
        <span id="weatherDescription">
          {weatherData.main.description}
        </span>
        <img src={weatherData.main.icon} className="weatherIcon" alt="main weather icon" />
      </div>
      <WeatherDetails weatherDetails={weatherData.details} />
    </div>

  );
}
