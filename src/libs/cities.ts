type City = {
  name: {
    [key: string]: string
    en: string,
    es: string,
  }
};

const cities: City[] = [
  {
    name: {
      en: 'Rome',
      es: 'Roma',
    },
  },
  {
    name: {
      en: 'New York',
      es: 'Nueva York',
    },
  },
  {
    name: {
      en: 'London',
      es: 'Londres',
    },
  },
];

interface SetCityNameParams {
  selectedCity: string,
  lang: string,
}

const setCityName = ({ selectedCity, lang }: SetCityNameParams): string => {
  if (lang === 'en') return selectedCity;
  const cityObject = cities.find((city) => city.name.en === selectedCity);
  if (cityObject) {
    return cityObject.name.es;
  }
  return 'Rome';
};

// type GetBackgroundParams = { city: string, code: string}

// const getBackground = ({city, code}: GetBackgroundParams) => {

// }

export { cities, setCityName };
