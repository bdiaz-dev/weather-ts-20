import React, {
  createContext, useState, useMemo, useContext,
} from 'react';

const MenuContext = createContext<UseStateMenuContext | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isMenu, setIsMenu] = useState(false);

  const value = useMemo(() => ({ isMenu, setIsMenu }), [isMenu]);

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
