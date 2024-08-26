// Actual Data Fetch interfaces

interface ActualDataFetchCoord {
  [key: string]: number,
  lon: number,
  lat: number,
}

interface ActualDataFetchWeatherObject {
  [key: string]: number | string,
  id: number,
  main: string,
  description: string,
  icon: string,
}

interface ActualDataFetchWeather {
  [key: number]
  weather: ActualDataFetchWeatherObject[],
}

interface ActualDataFetchMainObject {
  [key: string]: number,
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
  sea_level: number,
  grnd_level: number,
}

interface ActualDataFetchWindObject {
  [key: string]: number
  speed: number,
  deg: number,
}

interface ActualDataFetchCloudsObject {
  all: number,
}

interface ActualDataFetchSysObject {
  [key: string]: number | string,
  type: number,
  id: number,
  country: string,
  sunrise: number,
  sunset: number,
}

export interface ActualDataFetch {
  [key: string]
  coord: ActualDataFetchCoord,
  weather: ActualDataFetchWeather,
  base: string,
  main: ActualDataFetchMainObject,
  visibility: number,
  wind: ActualDataFetchWindObject,
  clouds: ActualDataFetchCloudsObject,
  dt: number,
  sys: ActualDataFetchSysObject,
  timezone: number,
  id: number,
  name: string,
  cod: number,
}

// Forecast Data Fetch interfaces

type ForecastDataFetchCityObject =
& Pick<ActualDataFetch, 'id' | 'name' | 'coord' | 'timezone'>
& Pick<ActualDataFetchSysObject, 'country' | 'sunrise' | 'sunset'>
& {
  [key: string],
  population: number,
};

interface ForecastDataFetchMainObject extends ActualDataFetchMainObject {
  [key: string]
  temp_kf: number,
}

interface ForecastDataFetchWindObject extends ActualDataFetchWindObject {
  [key: string]
  gust: number,
}

interface ForecastDataFetchSysObject {
  pod: string,
}

interface ForecastDataFetchListObject {
  [key: string]
  dt: number,
  main: ForecastDataFetchMainObject,
  weather: ActualDataFetchMainObject,
  clouds: ActualDataFetchCloudsObject,
  wind: ForecastDataFetchWindObject,
  visibility: number,
  pop: number,
  sys: ForecastDataFetchSysObject,
  dt_txt: string,
}

export interface ForecastDataFetchList {
  [key: string]
  list: ForecastDataFetchListObject[]
}

export interface ForecastDataFetch {
  [key: string]
  cod: number,
  message: number,
  cnt: number,
  city: ForecastDataFetchCityObject,
  list: ForecastDataFetchList,
}
