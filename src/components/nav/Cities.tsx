import { motion } from 'framer-motion';
import { useLanguage } from '@context/LanguageContext';
import { handleClick, isActive } from '@libs/handleCities';
import { useCity } from '@context/CityContext';
import { cities } from '@libs/cities';
import { useMenu } from '@context/MenuContext';

// interface CitiesParams { closeMenu: VoidFunction }
export default function Cities() {
  const { city: selectedCity, setCity } = useCity();
  const { lang } = useLanguage();
  const { setIsMenu } = useMenu();

  return (
    <ul id="cities" data-testid="citiesList">
      {
        cities.map((ct) => (
          <li
            key={ct.name.en}
          >
            <motion.button
              type="button"
              onClick={() => { handleClick({ city: ct.name.en, setIsMenu, setCity }); }}
              className={isActive(ct.name.en, selectedCity)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {ct.name[lang]}
            </motion.button>
          </li>
        ))
      }
    </ul>
  );
}
