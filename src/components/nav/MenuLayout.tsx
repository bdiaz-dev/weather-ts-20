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
        {/* <h2>WeatherApp</h2> */}
        <LangButtons />
      </header>
      <MenuButton openMenu={handleOpenMenu} buttonRef={buttonRef} />
      <Nav handleOpenMenu={handleOpenMenu} menuRef={menuRef} />
    </>
  );
}
