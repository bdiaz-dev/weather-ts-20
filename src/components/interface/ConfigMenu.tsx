import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LangButtons from './LangButtons';
import ThemeSelector from './ThemeSelector';
import { configLabels } from '../../libs/content';
import { useLanguage } from '../../context/LanguageContext';

export default function ConfigMenu() {
  const { lang } = useLanguage();
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const configRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        configRef.current
        && event.target instanceof Node
        && !configRef.current.contains(event.target)
      ) {
        setIsConfigOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [configRef]);

  return (
    <div
      id="configMenuContainer"
    >
      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsConfigOpen(!isConfigOpen)}
      >
        <img src="/assets/buttons/config.svg" alt="" />
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
              ref={configRef}
            >
              <p>{configLabels[lang].langLabel}</p>
              <LangButtons />
              <p>{configLabels[lang].themeLabel}</p>
              <ThemeSelector />
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
}
