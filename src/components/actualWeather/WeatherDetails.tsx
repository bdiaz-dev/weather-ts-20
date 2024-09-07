import { detailsSVG, text } from '../../libs/content';
import { useLanguage } from '../../context/LanguageContext';

interface WeatherDetailsParams {weatherDetails: ActualWeatherFormatDetails}

export default function WeatherDetails({ weatherDetails }: WeatherDetailsParams) {
  const { lang } = useLanguage();

  return (
    <ul id="weatherDetails">
      <li>
        <img src={detailsSVG.maxMin} className="detailsSVG" alt="max-min svg" />
        <b>{text[lang].maxMin}</b>
        <div>
          <span>{weatherDetails.maxTemp}</span>
          <span>{weatherDetails.minTemp}</span>
        </div>
      </li>
      <li>
        <img src={detailsSVG.feel} className="detailsSVG" alt="feel svg" />
        <b>{text[lang].feel}</b>
        <div>
          <span>{weatherDetails.feelsLike}</span>
        </div>
      </li>
      <li>
        <img src={detailsSVG.wind} className="detailsSVG" alt="wind svg" />
        <b>{text[lang].wind}</b>
        <div>
          <span>{weatherDetails.windSpeed}</span>
          <span>{weatherDetails.direction}</span>
        </div>
      </li>
      <li>
        <img src={detailsSVG.humidity} className="detailsSVG" alt="humidity svg" />
        <b>{text[lang].humidity}</b>
        <div>
          <span>{weatherDetails.humidity}</span>
        </div>
      </li>
    </ul>
  );
}
