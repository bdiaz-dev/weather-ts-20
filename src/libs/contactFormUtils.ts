import { FormEvent } from 'react';
import Swal from 'sweetalert2';
import { validateForm } from './validateForm';
import { getConfirmation, getThanks } from './formText';

const showAlert = (e, text, thanks) => {
  e.preventDefault();
  Swal.fire({
    // title: 'Are you sure?',
    text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    allowEscapeKey: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        // title: '!',
        text: thanks,
        icon: 'success',
      });
    }
  });
};

export const handleFormSend = (e: FormEvent, { emailRef, formData, lang }: FormSendParams) => {
  const { alert, confirm } = window;

  if (!validateForm({ emailRef, phone: formData.phone, lang })) {
    e.preventDefault();
    return;
  }

  const confirmationMessage = getConfirmation(lang, formData);
  // if (confirm(confirmationMessage)) {
  //   alert(getThanks(lang));
  // } else {
  //   e.preventDefault();
  // }
  showAlert(e, confirmationMessage, getThanks(lang));
};
