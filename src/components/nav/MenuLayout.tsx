import { useMenu } from '../../hooks/menu/useMenu';
import ConfigMenu from '../interface/ConfigMenu';
import LangButtons from '../interface/LangButtons';
import ThemeButton from '../interface/ThemeSelector';
import MenuButton from './MenuButton';
import Nav from './Nav';

export default function MenuLayout() {
  const {
    menuRef, buttonRef, handleOpenMenu,
  } = useMenu();

  return (
    <>
      <header>

        {/* <ThemeButton /> */}

        {/* <LangButtons /> */}
        <ConfigMenu />
      </header>
      <MenuButton openMenu={handleOpenMenu} buttonRef={buttonRef} />
      <Nav handleOpenMenu={handleOpenMenu} menuRef={menuRef} />
    </>
  );
}
