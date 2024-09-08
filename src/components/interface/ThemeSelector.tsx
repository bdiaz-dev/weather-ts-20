import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { themes, handleThemes, getTheme } from '../../libs/handleThemes';

export default function ThemeSelector() {
  const { lang } = useLanguage();
  const theme = getTheme();
  const [actualTheme, setActualTheme] = useState(theme ?? '');
  return (
    <select
      id="themeSelector"
      onChange={(e) => {
        const th = e.target.value;
        setActualTheme(th);
        handleThemes(th);
      }}
      value={actualTheme}
    >
      {
        Object.values(themes[lang]).map((th) => (
          <option
            key={th.code}
            value={th.code}
          >
            {`${th.icon} ${th.name}`}
          </option>
        ))
      }
    </select>
  );
}
