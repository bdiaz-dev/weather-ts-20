import { KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function LangButtons() {
  const { lang, setLang } = useLanguage();

  const toggleSwitch = () => {
    const langToSet = lang === 'en' ? 'es' : 'en';
    setLang(langToSet);
  };

  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'ControlLeft') {
      toggleSwitch();
    }
  };

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    // <div id="langButtonsContainer">
    <div
      className="langSwitch"
      data-is-en={lang === 'en'}
      onClick={toggleSwitch}
      tabIndex={0}
      aria-checked
      role="switch"
      onKeyUp={(e) => handleKey(e)}
    >
      <motion.div className="langHandle" layout transition={spring} />
    </div>
  );
}
