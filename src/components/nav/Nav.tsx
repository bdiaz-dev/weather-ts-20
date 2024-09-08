import { motion } from 'framer-motion';
import useClickOutside from '@hooks/mouseEvent/useClickOutside';
import { useContactModal } from '@context/ContactModalContext';
import { formLabels } from '@libs/formText';
import { useLanguage } from '@context/LanguageContext';
import { useMenu } from '@context/MenuContext';
import Cities from './Cities';
import MenuButton from './MenuButton';

export default function Nav() {
  const { isContactModal, setIsContactModal } = useContactModal();
  const { lang } = useLanguage();
  const { isMenu, setIsMenu } = useMenu();
  const navRef = useClickOutside<HTMLDivElement>(() => setIsMenu(false));

  return (
    <div
      ref={navRef}
    >
      <MenuButton />

      <nav
        className={isMenu ? 'openMenu' : ''}
      >
        <Cities />
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

    </div>
  );
}
