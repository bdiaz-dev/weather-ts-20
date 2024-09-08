import { useState } from 'react';
import { LanguageProvider, useLanguage } from '@context/LanguageContext';
import { CityProvider, useCity } from '@context/CityContext';
import { useActualWeather } from '@hooks/data/useActualWeather';
import { useForecastWeather } from '@hooks/data/useForecastWeather';
import WeatherMain from '@components/actualWeather/WeatherMain';
import Forecast from '@components/forecastWeather/Forecast';
import ErrorAlert from '@components/error/ErrorAlert';
import MenuLayout from '@components/nav/MenuLayout';
import todayDate from '@libs/todayDate';
import PageHead from '@components/helmet/PageHead';
import LoadingMessage from '@components/loading/LoadingMessage';
import Background from '@components/background/Background';
import ContactFormModal from '@components/contactForm/ContactFormModal';
import { ContactModalProvider } from '@context/ContactModalContext';
import { setCityName } from '@libs/cities';
import ConfigMenu from '@components/interface/ConfigMenu';
import ForecastDetails from '@components/forecastWeather/ForecastDetails';
import { MenuProvider } from '@context/MenuContext';

function App() {
  const { lang } = useLanguage();
  const { city } = useCity();
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [forecastDetails, setForecastDetails] = useState<ForecastWeatherFormatObject | null>(null);

  const {
    formattedWeather: weatherData,
    error: weatherError,
  } = useActualWeather({ city, lang });
  const {
    formattedForecast: forecastData,
    error: forecastError,
  } = useForecastWeather({ city, lang });

  return (
    <>
      {/* Dynamic title and favicon */}
      {
        weatherData?.main
        && (
          <PageHead
            title={`${setCityName({ selectedCity: city, lang })} : ${weatherData.main.description} ${weatherData.main.temp}`}
            favicon={weatherData.main.icon}
          />
        )
      }

      {/* Forecast Details Modal */}
      <ForecastDetails
        forecastDetails={forecastDetails}
        setForecastDetails={setForecastDetails}
      />

      {/* Config Menu */}
      <ConfigMenu />

      {/* Form Modal */}
      <ContactFormModal />

      {/* Loading Message */}
      {
        !weatherData?.main && isFirstLoad
        && <LoadingMessage setIsFirstLoad={setIsFirstLoad} />
      }

      {/* Background container */}
      <Background
        city={weatherData?.main.cityFetch}
        code={weatherData?.main.code}
      >

        {/* Menu and header layout */}
        <MenuLayout />

        <article>

          {/* Front Date */}
          {
            weatherData?.main && <h2 className="frontDate">{todayDate(lang)}</h2>
          }

          {/* Error message from Weather Main */}
          {
            weatherError
            && (
              <ErrorAlert>
                {weatherError}
              </ErrorAlert>
            )
          }

          {/* Actual weather */}
          {
            weatherData?.main && !weatherError
            && (
              <section>
                <WeatherMain
                  weatherData={weatherData}
                />
              </section>
            )
          }

          {/* Error message from Forecast */}
          {
            forecastError
            && (
              <ErrorAlert>
                {forecastError}
              </ErrorAlert>
            )
          }

          {/* Forecast weather */}
          {
            forecastData && !forecastError // && !forecastLoading
            && (
              <section>
                <Forecast
                  forecastData={forecastData}
                  setForecastDetails={setForecastDetails}
                />
              </section>
            )
          }
        </article>
      </Background>
    </>
  );
}

export default function Root() {
  return (
    <LanguageProvider>
      <ContactModalProvider>
        <CityProvider>
          <MenuProvider>
            <App />
          </MenuProvider>
        </CityProvider>
      </ContactModalProvider>
    </LanguageProvider>
  );
}
