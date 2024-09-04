export const themes: Themes = {
  en: {
    system: { name: 'System', code: '', icon: '💻' },
    dark: { name: 'Dark', code: 'dark', icon: '🌙' },
    light: { name: 'Light', code: 'light', icon: '☀️' },
  },
  es: {
    system: { name: 'Sistema', code: '', icon: '💻' },
    dark: { name: 'Oscuro', code: 'dark', icon: '🌙' },
    light: { name: 'Claro', code: 'light', icon: '☀️' },
  },
};

export const handleThemes = (code: string) => {
  document.documentElement.setAttribute('data-theme', code);
};
