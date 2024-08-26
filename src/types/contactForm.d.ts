interface InitialFormData {
  name: string,
  birthdate: string,
  city: string,
  email: string,
  phone: string,
}

interface FormSendParams {
  emailRef: React.RefObject<HTMLInputElement>,
  formData: InitialFormData,
  lang: string,
}

interface UseFormDataParams {
  formData: InitialFormData,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>,
}

interface TitlesStrings {
  [key: string]: string
  disabled: string,
  enabled: string,
}

interface TitlesMap {
  [key: string]: TitlesStrings
  en: TitlesStrings,
  es: TitlesStrings,
}
