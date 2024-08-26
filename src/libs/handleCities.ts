export const isActive = (ct: string, selectedCity: string) => ((selectedCity === ct) ? 'cityActive' : '');

interface HandleClickParams {
  setCity: React.Dispatch<React.SetStateAction<string>>,
  closeMenu: VoidFunction,
  city: string,
}
export const handleClick = ({ city, closeMenu, setCity }: HandleClickParams) => {
  setCity(city);
  closeMenu();
};
