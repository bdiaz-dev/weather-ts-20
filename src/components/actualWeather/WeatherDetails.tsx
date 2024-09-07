import { detailsSVG, text } from '../../libs/content';
import { useLanguage } from '../../context/LanguageContext';

interface WeatherDetailsParams { weatherDetails: ActualWeatherFormatDetails }

export default function WeatherDetails({ weatherDetails }: WeatherDetailsParams) {
  const { lang } = useLanguage();

  return (
    <ul id="weatherDetails">
      <li>
        <img src={detailsSVG.maxMin} className="detailsSVG" alt="max-min svg" />
        <div>
          <b>{text[lang].maxMin}</b>
          <span>{`${weatherDetails.maxTemp} / ${weatherDetails.minTemp}`}</span>
        </div>
      </li>
      <li>
        <img src={detailsSVG.feel} className="detailsSVG" alt="feel svg" />
        <div>
          <b>{text[lang].feel}</b>
          <span>{weatherDetails.feelsLike}</span>
        </div>
      </li>
      <li>
        <img src={detailsSVG.wind} className="detailsSVG" alt="wind svg" />
        <div>
          <b>{text[lang].wind}</b>
          <span>{`${weatherDetails.windSpeed} - ${weatherDetails.direction}`}</span>
        </div>
      </li>
      <li>
        <img src={detailsSVG.humidity} className="detailsSVG" alt="humidity svg" />
        <div>
          <b>{text[lang].humidity}</b>
          <span>{weatherDetails.humidity}</span>
        </div>
      </li>
    </ul>
  );
}
