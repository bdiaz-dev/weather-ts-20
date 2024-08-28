import { useCity } from '../../context/CityContext';
import { useLanguage } from '../../context/LanguageContext';
import useNoOpacity from '../../hooks/faderAnimation/useNoOpacity';
import { setCityName } from '../../libs/cities';
import { detailsSVG, text } from '../../libs/content';
import { ActualWeatherFormat } from '../../types/dataFormat';

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
      <span className='weatherTemp'>
        {weatherData.main.temp}
      </span>
      <span>
      <img src={weatherData.main.icon} alt="main weather icon" />
      </span>
      <p id="weatherDescription">
        {weatherData.main.description}
      </p>
      <ul id="weatherDetails" ref={mainRef}>
        <li>
          <img src={detailsSVG.maxMin} className="detailsSVG" alt="max-min svg" />
          <b>{text[lang].maxMin}</b>
          <div>
            <span>{weatherData.details.maxTemp}</span>
            <span>{weatherData.details.minTemp}</span>
          </div>
        </li>
        <li>
          <img src={detailsSVG.feel} className="detailsSVG" alt="feel svg" />
          <b>{text[lang].feel}</b>
          <div>
            <span>{weatherData.details.feelsLike}</span>
          </div>
        </li>
        <li>
          <img src={detailsSVG.wind} className="detailsSVG" alt="wind svg" />
          <b>{text[lang].wind}</b>
          <div>
            <span>{weatherData.details.windSpeed}</span>
            <span>{weatherData.details.direction}</span>
          </div>
        </li>
        <li>
          <img src={detailsSVG.humidity} className="detailsSVG" alt="humidity svg" />
          <b>{text[lang].humidity}</b>
          <div>
            <span>{weatherData.details.humidity}</span>
          </div>
        </li>
      </ul>
    </div>

  );
}
