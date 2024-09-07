import { useEffect, useRef } from 'react';

function useClickOutside<T extends HTMLElement>(handler: (event: MouseEvent) => void) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current
        && event.target instanceof Node
        && !ref.current.contains(event.target)
      ) {
        handler(event);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler]);

  return ref;
}

export default useClickOutside;
