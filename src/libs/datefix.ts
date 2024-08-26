export default function dateFix({ dt, lang }: DateFixParams) {
  const months: StringListEnEs = {
    en: ['Ja', 'Fe', 'Ma', 'Ap', 'My', 'Jn', 'Jl', 'Au', 'Se', 'Oc', 'No', 'De'],
    es: ['En', 'Fe', 'Mr', 'Ab', 'My', 'Jn', 'Jl', 'Ag', 'Se', 'Oc', 'No', 'Di'],
  };
  const day: string = dt.substring(8, 10);
  const month: string = months[lang][(Number(dt.substring(5, 7)) - 1)];
  const result: string = `${day} ${month}`;
  return result;
}
