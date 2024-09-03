export const themes: Themes = {
  en: {
    dark: { name: 'dark', code: 'dark' },
    light: { name: 'light', code: 'light' },
    system: { name: 'system', code: '' },
  },
  es: {
    dark: { name: 'oscuro', code: 'dark' },
    light: { name: 'claro', code: 'light' },
    system: { name: 'sistema', code: '' },
  },
};

export const handleThemes = (code: string) => {
  document.documentElement.setAttribute('data-theme', code);
};
