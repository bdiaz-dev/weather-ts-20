import { motion } from 'framer-motion';
import { useCity } from '@context/CityContext';
import { useLanguage } from '@context/LanguageContext';
import useNoOpacity from '@hooks/faderAnimation/useNoOpacity';
import { setCityName } from '@libs/cities';
import { forecastTitle } from '@libs/content';

interface ForecastParams {
  forecastData: ForecastWeatherFormat,
  setForecastDetails: React.Dispatch<React.SetStateAction<ForecastWeatherFormatObject | null>>
}

export default function Forecast({ forecastData, setForecastDetails }: ForecastParams) {
  const { lang } = useLanguage();
  const { city } = useCity();
  const cityInLang = setCityName({ selectedCity: city, lang });
  const mainRef = useNoOpacity<HTMLDivElement>({
    data: forecastData, city: cityInLang, timeout: 1500,
  });
  return (
    <div id="forecastContainer" ref={mainRef}>
      <h3>{forecastTitle[lang]}</h3>
      <ul id="forecastList">
        {forecastData.map((item) => (
          <motion.li
            key={`${item.date} ${item.hour}`}
            onTap={() => { setForecastDetails(item); }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            data-testid="forecastElement"
          >
            <div>
              <b>{item.date}</b>
              <b>{item.hour}</b>
            </div>
            <div>
              <img src={item.icon} alt="forecast weather icon" />
              <span>{item.temp}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
