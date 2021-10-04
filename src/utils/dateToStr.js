export default function dateToStr(timestamp) {
  const date = (timestamp !== undefined) ? new Date(timestamp) : new Date();
  const dateAgeDays = Math.floor(date / 24 / 60 / 60 / 1000);
  const todayAgeDays = Math.floor(Date.now() / 24 / 60 / 60 / 1000);
  let prefix = '';
  let suffix = '';

  if (dateAgeDays === (todayAgeDays + 1)) {
    prefix += 'завтра (';
    suffix += ')'
  }
  if (dateAgeDays === todayAgeDays) {
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
