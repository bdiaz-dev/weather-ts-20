import { useLanguage } from '../../context/LanguageContext';
import { themes, handleThemes } from '../../libs/handleThemes';

export default function ThemeButton() {
  const { lang } = useLanguage();
  return (
    <div>
      {
        Object.values(themes[lang]).map((th) => (
          <button
            type="button"
            key={th.code}
            onClick={() => handleThemes(th.code)}
          >
            {th.name}
          </button>
        ))
      }
    </div>
  );
}
