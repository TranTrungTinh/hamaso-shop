import { date } from 'quasar';

const filters = {
  dateFormat(dateTime, pattern = 'DD/MM/YYYY HH:mm') {
    const newDate = Date.parse(dateTime);
    return date.formatDate(newDate, pattern);
  }
}

export default filters;