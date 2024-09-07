export default function dateFix({ dt, lang, getLarge = false }: DateFixParams) {
  const months: StringListEnEs = {
    en: ['Ja', 'Fe', 'Ma', 'Ap', 'My', 'Jn', 'Jl', 'Au', 'Se', 'Oc', 'No', 'De'],
    es: ['En', 'Fe', 'Mr', 'Ab', 'My', 'Jn', 'Jl', 'Ag', 'Se', 'Oc', 'No', 'Di'],
  };
  const LargeMonths: StringListEnEs = {
    en: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    es: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
    ],
  };
  const day: string = dt.substring(8, 10);
  const month: string = getLarge
    ? LargeMonths[lang][(Number(dt.substring(5, 7)) - 1)]
    : months[lang][(Number(dt.substring(5, 7)) - 1)];
  const result: string = `${day} ${month}`;
  return result;
}
