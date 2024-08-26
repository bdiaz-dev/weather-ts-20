import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface PageHeadParams {
  title: string,
  favicon: string,
}

export default function PageHead({ title, favicon }: PageHeadParams) {
  useEffect(() => {
    const faviconElement: HTMLLinkElement | null = document.getElementById('favicon') as HTMLLinkElement | null;
    if (faviconElement) {
      faviconElement.href = favicon;
    }
  }, [favicon]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
}
