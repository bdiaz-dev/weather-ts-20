import Swal from 'sweetalert2';
import { validateForm } from './validateForm';
import { getConfirmation, getThanks } from './formText';

interface ShowConfirmParams {
  text: string,
  thanks: string | undefined,
}

const showConfirm = async ({ text, thanks }: ShowConfirmParams) => {
  const res = await Swal.fire({
    // title: 'Are you sure?',
    // text,
    html: text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ok',
    cancelButtonText: 'No',
    allowEscapeKey: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        // title: '!',
        title: thanks,
        icon: 'success',
      });
      return false;
    }
    return true;
  });
  return res;
};

export const handleFormSend = async ({
  emailRef, formData, lang, setIsContactModal,
}: FormSendParams) => {
  if (!validateForm({ emailRef, phone: formData.phone, lang })) {
    return true;
  }

  const confirmationMessage = getConfirmation(lang, formData);
  const thanksMessage = getThanks(lang);

  const result = await showConfirm({ text: confirmationMessage, thanks: thanksMessage });
  setIsContactModal(result);
  return result;
};
