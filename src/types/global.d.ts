interface UseStateCityContext {
  city: string,
  setCity: React.Dispatch<React.SetStateAction<string>>,
}

interface UseStateLangContext {
  lang: UseStateCityContext.lang,
  setLang: UseStateCityContext.setCity,
}

interface VoidFunction {
  (data: void): void;
}

interface FetchParams {
  city: string,
  lang: string,
}

interface ObjectEnEs {
  [key: string]: string
  en: string,
  es: string,
}

interface StringListEnEs {
  [key: string]: string[]
  en: string[],
  es: string[],
}

interface ContentStrings {
  feel: string,
  wind: string,
  maxMin: string,
  humidity: string,
}

interface ContentTextMap {
  [key: string]: ContentStrings
  en: ContentStrings,
  es: ContentStrings
}

interface DateFixParams {
  dt: string,
  lang: string,
}

interface LanguageStrings {
  [key: string]: string | undefined;
  title?: string;
  name?: string;
  born?: string;
  live?: string;
  email?: string;
  phone?: string;
  button?: string;
  question?: string;
  thanks?: string;
}

interface LanguageMap {
  [key: string]: LanguageStrings;
  en: LanguageStrings;
  es: LanguageStrings;
}

interface MessagesStrings {
  emailError: string,
  phoneError: string,
}

interface MessagesMap {
  [key: string]: MessagesStrings
  en: MessagesStrings,
  es: MessagesStrings,
}

interface NoOpacityParams {
  data: ActualWeatherFormatMain | ActualWeatherFormatDetails | ForecastWeatherFormat,
  city: string,
  timeout: number
}
