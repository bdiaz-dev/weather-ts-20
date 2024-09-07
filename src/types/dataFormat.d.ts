interface ActualWeatherFormatMain {
  [key:string]
  country: string,
  icon: string
  description: string,
  temp: string,
  code: string,
  cityFetch: string,
}

interface ActualWeatherFormatDetails {
  [key: string]
  maxTemp: string,
  minTemp: string,
  feelsLike: string,
  windSpeed: string,
  direction: string,
  humidity: string,
}

interface ActualWeatherFormat {
  [key: string]
  main: ActualWeatherFormatMain,
  details: ActualWeatherFormatDetails,
}

type ForecastWeatherFormatObject =
Pick<ActualWeatherFormatMain, 'icon' | 'description' | 'temp' | 'cityFetch'>
& Omit<ActualWeatherFormatDetails, 'maxTemp' | 'minTemp'>
& {
  [key: string]
  hour: string,
  date: string,
  largeDate: string,
  pop: string,
};

interface ForecastWeatherFormat extends Array<ForecastWeatherFormatObject> {}
