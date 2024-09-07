import { FormEvent, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useFormState } from '../../hooks/contactForm/useFormState';
import { formLabels, placeholders } from '../../libs/formText';
import { useLanguage } from '../../context/LanguageContext';
import { useButtonTitle } from '../../hooks/contactForm/useButtonTitle';
import { handleFormSend } from '../../libs/contactFormUtils';
import { useContactModal } from '../../context/ContactModalContext';

export default function ContactFormModal() {
  const { lang } = useLanguage();
  const { formData, buttonDisabled, handleInputChange } = useFormState();
  const sendTitle = useButtonTitle(lang, buttonDisabled);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const { isContactModal, setIsContactModal } = useContactModal();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleFormSend({
      emailRef, formData, lang, setIsContactModal,
    });
  };

  return (
    <AnimatePresence>
      {
        isContactModal
        && (
          <motion.div
            id="contactFormModal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
            >
              <label htmlFor="nameInput">{formLabels[lang].name}</label>
              <input
                id="nameInput"
                data-testid="nameInput"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder={placeholders.name}
              />

              <label htmlFor="dateInput">{formLabels[lang].born}</label>
              <input
                id="dateInput"
                data-testid="dateInput"
                type="date"
                value={formData.birthdate}
                onChange={(e) => handleInputChange('birthdate', e.target.value)}
              />

              <label htmlFor="cityInput">{formLabels[lang].live}</label>
              <input
                id="cityInput"
                data-testid="cityInput"
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                placeholder={placeholders.city}
              />

              <label htmlFor="emailInput">{formLabels[lang].email}</label>
              <input
                id="emailInput"
                data-testid="emailInput"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder={placeholders.email}
                ref={emailRef}
              />

              <label htmlFor="phoneInput">{formLabels[lang].phone}</label>
              <input
                id="phoneInput"
                data-testid="phoneInput"
                type="text"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder={placeholders.phone}
              />

              {/* <button
            id="formSendButton"
            type="submit"
            disabled={buttonDisabled}
            style={{ borderColor: buttonDisabled ? '#1a1a1a' : 'white' }}
            title={sendTitle}
            className="formButton"
            >
            {formLabels[lang].button}
            </button> */}
              <motion.button
                id="formSendButton"
                type="submit"
                disabled={buttonDisabled}
                // style={{ borderColor: buttonDisabled ? '#1a1a1a' : 'white' }}
                title={sendTitle}
                className="formButton"
                whileHover={{ scale: !buttonDisabled ? 1.1 : 1 }}
                whileTap={{ scale: !buttonDisabled ? 0.9 : 1 }}
              >
                {formLabels[lang].sendButton}
              </motion.button>

              <motion.button
                type="button"
                className="closeModalButton"
                onTap={() => { setIsContactModal(!isContactModal); }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {formLabels[lang].closeButton}
              </motion.button>
            </motion.form>
          </motion.div>
        )
      }

    </AnimatePresence>
  );
}
