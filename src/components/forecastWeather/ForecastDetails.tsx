import { AnimatePresence, motion } from 'framer-motion';
import { detailsSVG } from '../../libs/content';

interface ForecastParams {
  forecastDetails: ForecastWeatherFormatObject | null,
  setForecastDetails: React.Dispatch<React.SetStateAction<ForecastWeatherFormatObject | null>>,
}

export default function ForecastDetails({ forecastDetails, setForecastDetails }: ForecastParams) {
  return (
    <AnimatePresence>
      {
        forecastDetails
        && (
          <motion.div
            id="forecastDetailsCardContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="forecastDetailsCard"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
            >
              <h2>{forecastDetails.cityFetch}</h2>
              <h2>{`${forecastDetails.largeDate} ${forecastDetails.hour}`}</h2>
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
                    <b>Precipitation Prob.</b>
                    <span>{forecastDetails.pop}</span>
                  </div>
                </div>
                <div>
                  <img src={detailsSVG.wind} alt="wind icon" />
                  <div>
                    <b>Wind</b>
                    <span>{`${forecastDetails.windSpeed} - ${forecastDetails.direction}`}</span>
                  </div>
                </div>
                <div>
                  <img src={detailsSVG.feel} alt="feel icon" />
                  <div>
                    <b>Feels Like</b>
                    <span>{forecastDetails.feelsLike}</span>
                  </div>
                </div>
                <div>
                  <img src={detailsSVG.humidity} alt="humidity icon" />
                  <div>
                    <b>Humidity</b>
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
