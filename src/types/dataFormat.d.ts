interface ActualWeatherFormatMain {
  [key:string]
  country: string,
  icon: string
  description: string,
  temp: string,
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

export interface ActualWeatherFormat {
  [key: string]
  main: ActualWeatherFormatMain,
  details: ActualWeatherFormatDetails,
}

type ForecastWeatherFormatObject =
Pick<ActualWeatherFormatMain, 'icon' | 'description' | 'temp'>
& {
  [key: string]
  hour: string,
  date: string,
};

export type ForecastWeatherFormat = ForecastWeatherFormatObject[];
