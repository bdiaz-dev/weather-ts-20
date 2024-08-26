import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import engSVG from '../../assets/eng.svg';
import espSVG from '../../assets/esp.svg';

export default function LangButtons() {
  const { lang, setLang } = useLanguage();

  type LanguagesStrings = { code: string, label: string };
  type Languages = LanguagesStrings[];

  const toggleSwitch = () => {
    const langToSet = lang === 'en' ? 'es' : 'en';
    setLang(langToSet);
  };

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    // <div id="langButtonsContainer">
    <div className="langSwitch" data-is-en={lang === 'en'} onClick={toggleSwitch}>
      <motion.div className="langHandle" layout transition={spring} />
    </div>
  );
}
