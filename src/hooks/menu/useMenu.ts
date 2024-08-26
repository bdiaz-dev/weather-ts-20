import {
  useState, useEffect, useRef,
} from 'react';

export function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const handleOpenMenu = () => {
    if (menuRef.current) { menuRef.current.classList.toggle('openMenu'); }
    if (buttonRef.current) { buttonRef.current.classList.toggle('open'); }
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isMenuOpen && detailsRef.current) {
      detailsRef.current.open = false;
    }
  }, [isMenuOpen]);

  return {
    isMenuOpen, menuRef, buttonRef, detailsRef, handleOpenMenu,
  };
}
