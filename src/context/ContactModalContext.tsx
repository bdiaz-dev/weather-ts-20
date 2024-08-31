import React, {
  createContext, useState, useMemo, useContext,
} from 'react';

const ContactModalContext = createContext<UseStateModalContext | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isContactModal, setIsContactModal] = useState(false);

  const value = useMemo(() => ({ isContactModal, setIsContactModal }), [isContactModal]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
    </ContactModalContext.Provider>
  );
}

export const useContactModal = () => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
