export const isActive = (ct: string, selectedCity: string) => ((selectedCity === ct) ? 'cityActive' : '');

interface HandleClickParams {
  setCity: React.Dispatch<React.SetStateAction<string>>,
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>,
  city: string,
}
export const handleClick = ({ city, setIsMenu, setCity }: HandleClickParams) => {
  setCity(city);
  setIsMenu(false);
};
