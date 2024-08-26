import { useState, useEffect } from 'react';

export const useFormState = () => {
  const initialFormData: InitialFormData = {
    name: '',
    birthdate: '',
    city: '',
    email: '',
    phone: '',
  };
  const [formData, setFormData] = useState<InitialFormData>(initialFormData);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every((value) => value !== '');
    setButtonDisabled(!allFieldsFilled);
  }, [formData]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return { formData, buttonDisabled, handleInputChange };
};
