import React from 'react';
import Cities from './Cities';
import ContactForm from './ContactForm';

interface NavParams {
  menuRef: React.RefObject<HTMLElement>,
  handleOpenMenu: VoidFunction,
  detailsRef: React.RefObject<HTMLDetailsElement>
}

export default function Nav({ menuRef, handleOpenMenu, detailsRef }: NavParams) {
  return (
    <nav ref={menuRef}>
      <Cities closeMenu={handleOpenMenu} />
      <hr style={{ width: '85%' }} />
      <ContactForm detailsRef={detailsRef} />

    </nav>
  );
}
