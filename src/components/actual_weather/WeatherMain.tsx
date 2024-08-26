import { useCity } from '../../context/CityContext';
import { useLanguage } from '../../context/LanguageContext';
import useNoOpacity from '../../hooks/faderAnimation/useNoOpacity';
import { setCityName } from '../../libs/cities';
import { ActualWeatherFormatMain } from '../../types/dataFormat';

interface WeatherMainParams {weatherData: ActualWeatherFormatMain}

export default function WeatherMain({ weatherData }: WeatherMainParams) {
  const { lang } = useLanguage();
  const { city } = useCity();
  const cityInLang = setCityName({ selectedCity: city, lang });
  const mainRef = useNoOpacity<HTMLDivElement>({
    data: weatherData, city: cityInLang, timeout: 1000,
  });

  return (
    <div id="weatherMain" ref={mainRef}>
      <h2 data-testid="cityTitle">{`${cityInLang} ${weatherData.country}`}</h2>
      <img src={weatherData.icon} alt="main weather icon" />
      <p id="weatherDescription">
        {`${weatherData.description} ${weatherData.temp}`}
      </p>
    </div>

  );
}
