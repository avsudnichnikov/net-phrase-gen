export default function dateToStr(timestamp) {
  const date = (timestamp !== undefined) ? new Date(timestamp) : new Date();
  const today = new Date();
  let prefix = '';
  let suffix = '';
  if (date.getDate() === today.getDate()
    && date.getMonth() === today.getMonth()
    && date.getFullYear() === today.getFullYear()) {
    prefix += 'сегодня (';
    suffix += ')'
  }
  const monthNames = [
    'января', 'февраля', 'марта',
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря',
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  return `${prefix}${day} ${month}${suffix}`;
}
