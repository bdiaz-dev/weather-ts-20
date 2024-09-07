import {
  useState, useRef,
} from 'react';
// import useClickOutside from '../mouseEvent/useClickOutside';

export function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const menuRef = useClickOutside<HTMLElement>(() => { handleOpenMenu() });
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleOpenMenu = () => {
    if (menuRef.current) { menuRef.current.classList.toggle('openMenu'); }
    if (buttonRef.current) { buttonRef.current.classList.toggle('open'); }
    setIsMenuOpen(!isMenuOpen);
  };

  return {
    isMenuOpen, menuRef, buttonRef, handleOpenMenu, setIsMenuOpen,
  };
}
