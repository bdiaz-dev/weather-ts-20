interface BackgroundParam {
  city: string | undefined,
  code: string | undefined,
  children: React.ReactNode
}

interface UseStateCityContext {
  city: string,
  setCity: React.Dispatch<React.SetStateAction<string>>,
}

interface UseStateLangContext {
  lang: UseStateCityContext.city,
  setLang: UseStateCityContext.setCity,
}
interface UseStateModalContext {
  isContactModal: boolean,
  setIsContactModal: React.Dispatch<React.SetStateAction<boolean>>,
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
  pop?: string,
}

interface ContentTextMap {
  [key: string]: ContentStrings
  en: ContentStrings,
  es: ContentStrings
}

interface DateFixParams {
  dt: string,
  lang: string,
  getLarge?: boolean,
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
  sendButton?: string;
  closeButton?: string;
  question?: string;
  thanks?: string;
  langLabel?: string;
  themeLabel?: string;
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

interface ThemesStrings {
  name: string,
  code: string,
  icon: string,
}

interface ThemesObjects {
  dark: ThemesStrings,
  light: ThemesStrings,
  system: ThemesStrings,
}

interface Themes {
  [key: string]: ThemesObjects
  en: ThemesObjects,
  es: ThemesObjects,
}
