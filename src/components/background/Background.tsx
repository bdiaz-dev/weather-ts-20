import { useEffect, useState } from 'react';

export default function Background({ city, code, children }: BackgroundParam) {
  const [img, setImg] = useState<string>();
  useEffect(() => {
    if (!city) return;

    const cityString = city.replace(' ', '_');
    const getBackgroundString = `${cityString}/${code}`;
    setImg(`/assets/cities/${getBackgroundString}.jpg`);
  }, [city, code]);
  return (
    <main
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {children}
    </main>
  );
}
