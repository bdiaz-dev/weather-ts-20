/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

const useNoOpacity = <T extends HTMLElement>({ data, city, timeout }: NoOpacityParams) => {
  const elementRef = useRef<T | null>(null);
  const [lastData, setLastData] = useState();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return () => { };

    element.classList.remove('noOpacity');
    if (data === lastData) return () => { };
    const timer = setTimeout(() => {
      element.classList.add('noOpacity');
    }, timeout);

    setLastData(data);

    return () => clearTimeout(timer);
  }, [city, data, timeout]);

  return elementRef;
};

export default useNoOpacity;
