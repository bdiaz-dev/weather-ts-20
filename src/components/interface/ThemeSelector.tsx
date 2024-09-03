import { useLanguage } from '../../context/LanguageContext';
import { themes, handleThemes } from '../../libs/handleThemes';

export default function ThemeSelector() {
  const { lang } = useLanguage();
  return (
    <select
      id="themeSelector"
      onChange={(e) => handleThemes(e.target.value)}
    >
      {
        Object.values(themes[lang]).map((th) => (
          <option
            // type="button"
            key={th.code}
            // onClick={() => handleThemes(th.code)}
            value={th.code}
          >
            {th.name}
          </option>
        ))
      }
    </select>
  );
}
