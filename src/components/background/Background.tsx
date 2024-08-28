import React, { useEffect, useState } from 'react';
import { useCity } from '../../context/CityContext';

type BackgroundParam = { code: string, children: React.ReactNode };

export default function Background({ code, children }: BackgroundParam) {
  const { city } = useCity();
  const [img, setImg] = useState<string>();
  useEffect(() => {
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
