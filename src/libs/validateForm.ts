interface ValidateParams {
  emailRef: React.RefObject<HTMLInputElement>,
  phone: string,
  lang: string,
}

export const validateForm = ({ emailRef, phone, lang }: ValidateParams) => {
  const { alert } = window;
  const messages: MessagesMap = {
    en: { emailError: 'Please, verify your email', phoneError: 'Please, verify your phone' },
    es: { emailError: 'Por favor, verifica tu correo', phoneError: 'Por favor, verifica tu teléfono' },
  };

  const phoneRegex = /^(\+?\d{1,4}[\s-])?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  if (!phoneRegex.test(phone)) {
    alert(messages[lang].phoneError);
    return false;
  }

  if (emailRef.current) {
    if (!emailRef.current.checkValidity() && emailRef.current) {
      alert(messages[lang].emailError);
      return false;
    }
  }

  return true;
};
