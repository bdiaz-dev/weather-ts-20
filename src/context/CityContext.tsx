import {
  createContext, ReactNode, useContext, useMemo, useState,
} from 'react';

const CityContext = createContext<UseStateCityContext | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState('Lisbon');
  const value = useMemo(() => ({ city, setCity }), [city]);

  return (
    <CityContext.Provider value={value}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
}
