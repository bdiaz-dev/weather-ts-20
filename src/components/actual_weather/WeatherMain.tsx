import { useCity } from '../../context/CityContext';
import { useLanguage } from '../../context/LanguageContext';
import useNoOpacity from '../../hooks/faderAnimation/useNoOpacity';
import { setCityName } from '../../libs/cities';
import { detailsSVG, text } from '../../libs/content';
import { ActualWeatherFormat } from '../../types/dataFormat';
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
      <div className="weatherTempContainer">
        <span className="weatherTemp">
          {weatherData.main.temp}
        </span>
        <img src={weatherData.main.icon} alt="main weather icon" />
      </div>
      <p id="weatherDescription">
        {weatherData.main.description}
      </p>
      <WeatherDetails weatherDetails={weatherData.details} />
    </div>

  );
}
