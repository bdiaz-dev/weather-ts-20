import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface MenuButtonParams {
  openMenu: VoidFunction,
  buttonRef: React.RefObject<HTMLButtonElement>
}

export default function MenuButton({ openMenu, buttonRef }: MenuButtonParams) {
  const { lang } = useLanguage();
  const ariaLabel: ObjectEnEs = {
    en: 'Toggle Menu',
    es: 'Mostrar/Ocultar Menú',
  };
  return (
    <button
      id="menuButton"
      type="button"
      aria-label={ariaLabel[lang]}
      ref={buttonRef}
      onClick={openMenu}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
