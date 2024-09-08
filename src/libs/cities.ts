type City = {
  name: {
    [key: string]: string
    en: string,
    es: string,
  },
  country: string,
};

const cities: City[] = [
  {
    name: { en: 'Rome', es: 'Roma' },
    country: 'IT',
  },
  {
    name: { en: 'New York', es: 'Nueva York' },
    country: 'US',
  },
  {
    name: { en: 'London', es: 'Londres' },
    country: 'GB',
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

const getCountry = (selectedCity: string) => {
  const cityObject = cities.find((city) => city.name.en === selectedCity);
  if (cityObject) {
    return cityObject.country;
  }
  return 'IT';
};

export { cities, setCityName, getCountry };
