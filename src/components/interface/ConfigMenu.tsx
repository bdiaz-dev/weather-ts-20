import { useState } from 'react';
import { motion } from 'framer-motion';
import LangButtons from './LangButtons';
import ThemeSelector from './ThemeSelector';

export default function ConfigMenu() {
  const [isConfigOpen, setIsConfigOpen] = useState(false);
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

      {
        isConfigOpen
        && (
          <motion.div
            // data-is-open={isConfigOpen}
            id="configMenu"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <p>Language</p>
            <LangButtons />
            <p>Theme</p>
            <ThemeSelector />
          </motion.div>
        )
      }
    </div>
  );
}
