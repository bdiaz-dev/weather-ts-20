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
      en: 'Lisbon',
      es: 'Lisboa',
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
  return 'Lisbon';
};

export { cities, setCityName };
