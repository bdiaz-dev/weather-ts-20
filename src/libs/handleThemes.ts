export const themes: Themes = {
  en: {
    system: { name: 'system', code: '' },
    dark: { name: 'dark', code: 'dark' },
    light: { name: 'light', code: 'light' },
  },
  es: {
    system: { name: 'sistema', code: '' },
    dark: { name: 'oscuro', code: 'dark' },
    light: { name: 'claro', code: 'light' },
  },
};

export const handleThemes = (code: string) => {
  document.documentElement.setAttribute('data-theme', code);
};
