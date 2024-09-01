const text: LanguageMap = {
  en: {
    question: 'Is this your right data?',
    name: 'Your name is',
    born: 'You were born on',
    live: 'You live in',
    email: 'Your email is',
    phone: 'And your phone is',
    thanks: 'Thanks, we will contact you soon.',
  },
  es: {
    question: '¿Son estos tus datos?',
    name: 'Te llamas',
    born: 'Naciste el',
    live: 'Vives en',
    email: 'Tu correo es',
    phone: 'Y tu teléfono es',
    thanks: 'Gracias, pronto nos pondremos en contacto.',
  },
};

export const getConfirmation = (lang: string, formData: InitialFormData) => {
  const message = `
      <h2>${text[lang].question}</h2>
      <div style='text-align: start; margin: 20px;'>
      <b>${text[lang].name}:</b> <span>${formData.name}</span><br/>
      <b>${text[lang].born}:</b> <span>${formData.birthdate}</span><br/>
      <b>${text[lang].live}:</b> <span>${formData.city}</span><br/>
      <b>${text[lang].email}:</b> <span>${formData.email}</span><br/>
      <b>${text[lang].phone}:</b> <span>${formData.phone}</span><br/>
      </div>
      `;
  return message;
};

export const getThanks = (lang: string) => text[lang].thanks;

export const formLabels: LanguageMap = {
  en: {
    title: 'Contact us',
    name: 'Name',
    born: 'Birthday',
    live: 'Current City',
    email: 'Email',
    phone: 'Phone number',
    sendButton: 'Send',
    closeButton: 'Close',
  },
  es: {
    title: 'Contáctanos',
    name: 'Nombre',
    born: 'Fecha de nac.',
    live: 'Ciudad',
    email: 'Email',
    phone: 'Teléfono',
    sendButton: 'Enviar',
    closeButton: 'Cerrar',
  },
};

type Placeholders = {
  name: string,
  city: string,
  email: string,
  phone: string,
};

export const placeholders: Placeholders = {
  name: 'John Doe',
  city: 'London',
  email: 'your@email.com',
  phone: '+34600700800',
};
