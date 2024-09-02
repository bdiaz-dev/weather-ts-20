import { useMenu } from '../../hooks/menu/useMenu';
import LangButtons from '../interface/LangButtons';
import MenuButton from './MenuButton';
import Nav from './Nav';

export default function MenuLayout() {
  const {
    menuRef, buttonRef, handleOpenMenu,
  } = useMenu();

  return (
    <>
      <header>

        {/* <button
          type="button"
          onClick={() => {
            document.documentElement.setAttribute('data-theme', 'light');
          }}
        >
          light
        </button>

        <button
          type="button"
          onClick={() => {
            document.documentElement.setAttribute('data-theme', 'dark');
          }}
        >
          dark
        </button>

        <button
          type="button"
          onClick={() => {
            document.documentElement.setAttribute('data-theme', '');
          }}
        >
          system
        </button> */}

        <LangButtons />
      </header>
      <MenuButton openMenu={handleOpenMenu} buttonRef={buttonRef} />
      <Nav handleOpenMenu={handleOpenMenu} menuRef={menuRef} />
    </>
  );
}
