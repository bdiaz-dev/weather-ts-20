import { useEffect, useState } from 'react';

export const useButtonTitle = (lang: string, buttonDisabled: boolean) => {
  const [sendTitle, setSendTitle] = useState<string>('');

  useEffect(() => {
    const titles: TitlesMap = {
      en: {
        disabled: 'Fill all data to send',
        enabled: 'Send contact request',
      },
      es: {
        disabled: 'Rellene toda la información para enviar',
        enabled: 'Envíe la solicitud de contacto',
      },
    };
    const title = titles[lang][buttonDisabled ? 'disabled' : 'enabled'];
    setSendTitle(title);
  }, [lang, buttonDisabled]);

  return sendTitle;
};
