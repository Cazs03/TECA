export function InitialLoadDateCalendar() {
  var date = new Date();
  date.setDate(date.getDate() + 1);

  return date.getFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getDate();
}
