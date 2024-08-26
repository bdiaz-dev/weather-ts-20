export default function todayDate(lang: string) {
  const todayDateInstance = new Date();
  const months: StringListEnEs = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  };
  const weekDays: StringListEnEs = {
    en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  };
  const weekDay = weekDays[lang][todayDateInstance.getDay()];
  const month = months[lang][todayDateInstance.getMonth()];
  return (`${weekDay} ${todayDateInstance.getDate()} ${month} ${todayDateInstance.getFullYear()}`);
}
