import { useEffect, useState } from 'react';

export default function Background({ city, code, children }: BackgroundParam) {
  const [img, setImg] = useState<string>();
  useEffect(() => {
    if (!city) return;

    const cityString = city.replace(' ', '_');
    const getBackgroundString = `${cityString}/${code}`;
    const imgUrl = `/assets/cities/${getBackgroundString}.webp`;
    const image = new Image();
    image.src = imgUrl;
    image.onload = () => {
      setImg(`/assets/cities/${getBackgroundString}.webp`);
    };
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
