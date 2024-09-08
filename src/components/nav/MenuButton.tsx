import { useLanguage } from '@context/LanguageContext';
import { useMenu } from '@context/MenuContext';

export default function MenuButton() {
  const { lang } = useLanguage();
  const { isMenu, setIsMenu } = useMenu();
  const ariaLabel: ObjectEnEs = {
    en: 'Toggle Menu',
    es: 'Mostrar/Ocultar Menú',
  };
  return (
    <button
      id="menuButton"
      type="button"
      aria-label={ariaLabel[lang]}
      onClick={() => { setIsMenu(!isMenu); }}
      className={isMenu ? 'open' : ''}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
