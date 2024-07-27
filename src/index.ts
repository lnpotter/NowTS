import formatDate from './plugins/formatDate';
import parseDate from './plugins/parseDate';
import addDaysToDate from './plugins/addDaysToDate';
import subtractDaysFromDate from './plugins/subtractDaysFromDate';
import getDaysDifference from './plugins/getDaysDifference';
import toISO from './plugins/toISO';
import startOfMonth from './plugins/startOfMonth';
import endOfMonth from './plugins/endOfMonth';
import formatCurrentTime from './plugins/formatCurrentTime';
import addHoursToDate from './plugins/addHoursToDate';
import subtractHoursFromDate from './plugins/subtractHoursFromDate';
import parseTime from './plugins/parseTime';

const NowTS = {
  formatDate,
  parseDate,
  addDaysToDate,
  subtractDaysFromDate,
  getDaysDifference,
  toISO,
  startOfMonth,
  endOfMonth,
  formatCurrentTime,
  addHoursToDate,
  subtractHoursFromDate,
  parseTime,
};

export default NowTS;
