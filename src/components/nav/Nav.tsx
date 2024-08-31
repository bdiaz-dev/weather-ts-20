import React from 'react';
import { motion } from 'framer-motion';
import Cities from './Cities';
import { useContactModal } from '../../context/ContactModalContext';
import { formLabels } from '../../libs/formText';
import { useLanguage } from '../../context/LanguageContext';

interface NavParams {
  menuRef: React.RefObject<HTMLElement>,
  handleOpenMenu: VoidFunction,
}

export default function Nav({ menuRef, handleOpenMenu }: NavParams) {
  const { isContactModal, setIsContactModal } = useContactModal();
  const { lang } = useLanguage();
  return (
    <nav ref={menuRef}>
      <Cities closeMenu={handleOpenMenu} />
      <hr style={{ width: '85%' }} />
      <motion.button
        type="button"
        className="openModalButton"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { setIsContactModal(!isContactModal); }}
      >
        {formLabels[lang].title}
      </motion.button>

    </nav>
  );
}
