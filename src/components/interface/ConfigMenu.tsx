import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useClickOutside from '@hooks/mouseEvent/useClickOutside';
import { configLabels } from '@libs/content';
import { useLanguage } from '@context/LanguageContext';
import LangSwitch from './LangSwitch';
import ThemeSelector from './ThemeSelector';

export default function ConfigMenu() {
  const { lang } = useLanguage();
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const configRef = useClickOutside<HTMLDivElement>(() => setIsConfigOpen(false));

  return (
    <div
      id="configMenuContainer"
      ref={configRef}
    >
      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsConfigOpen(!isConfigOpen)}
        data-testid="configButton"
      >
        <img src="/assets/buttons/config.svg" alt="config button" />
      </motion.button>
      <AnimatePresence>
        {
          isConfigOpen
          && (
            <motion.div
              id="configMenu"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
            >
              <p>{configLabels[lang].langLabel}</p>
              <LangSwitch />
              <p>{configLabels[lang].themeLabel}</p>
              <ThemeSelector />
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
}
