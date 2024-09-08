import { AnimatePresence, motion } from 'framer-motion';
import { detailsSVG, text } from '@libs/content';
import { setCityName } from '@libs/cities';
import { useLanguage } from '@context/LanguageContext';
import dateFix from '@libs/datefix';
import useClickOutside from '@hooks/mouseEvent/useClickOutside';

interface ForecastParams {
  forecastDetails: ForecastWeatherFormatObject | null,
  setForecastDetails: React.Dispatch<React.SetStateAction<ForecastWeatherFormatObject | null>>,
}

export default function ForecastDetails({ forecastDetails, setForecastDetails }: ForecastParams) {
  const { lang } = useLanguage();
  const detailRef = useClickOutside<HTMLDivElement>(() => setForecastDetails(null));
  return (
    <AnimatePresence>
      {
        forecastDetails
        && (
          <motion.div
            id="forecastDetailsCardContainer"
            data-testid="forecastDetailsContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="forecastDetailsCard"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              ref={detailRef}
            >
              <h2>{setCityName({ selectedCity: forecastDetails.cityFetch, lang })}</h2>
              <h2>
                {`${dateFix({ dt: forecastDetails.largeDate, lang, getLarge: true })} 
                ${forecastDetails.hour}`}
              </h2>
              <div className="forecastIconContainer">
                <img src={forecastDetails.icon} alt="weather icon" />
                <div>
                  <h3>{forecastDetails.temp}</h3>
                  <h3>{forecastDetails.description}</h3>
                </div>
              </div>
              <div className="forecastDetailsContainer">
                <div>
                  <img src={detailsSVG.pop} alt="pop icon" />
                  <div>
                    <b>{text[lang].pop}</b>
                    <span>{forecastDetails.pop}</span>
                  </div>
                </div>
                <div>
                  <img src={detailsSVG.wind} alt="wind icon" />
                  <div>
                    <b>{text[lang].wind}</b>
                    <span>{`${forecastDetails.windSpeed} - ${forecastDetails.direction}`}</span>
                  </div>
                </div>
                <div>
                  <img src={detailsSVG.feel} alt="feel icon" />
                  <div>
                    <b>{text[lang].feel}</b>
                    <span>{forecastDetails.feelsLike}</span>
                  </div>
                </div>
                <div>
                  <img src={detailsSVG.humidity} alt="humidity icon" />
                  <div>
                    <b>{text[lang].humidity}</b>
                    <span>{forecastDetails.humidity}</span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => { setForecastDetails(null); }}
                type="button"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )
      }
    </AnimatePresence>
  );
}
