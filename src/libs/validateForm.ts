import Swal from 'sweetalert2';

interface ValidateParams {
  emailRef: React.RefObject<HTMLInputElement>,
  phone: string,
  lang: string,
}

export const validateForm = ({ emailRef, phone, lang }: ValidateParams) => {
  const messages: MessagesMap = {
    en: { emailError: 'Please, verify your email', phoneError: 'Please, verify your phone' },
    es: { emailError: 'Por favor, verifica tu correo', phoneError: 'Por favor, verifica tu teléfono' },
  };

  const showAlert = (text: string) => {
    Swal.fire({
      icon: 'error',
      title: text,
    });
  };

  const phoneRegex = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;
  if (!phoneRegex.test(phone)) {
    showAlert(messages[lang].phoneError);
    return false;
  }

  if (emailRef.current) {
    if (!emailRef.current.checkValidity() && emailRef.current) {
      showAlert(messages[lang].emailError);
      return false;
    }
  }

  return true;
};
