import parseTime from '../src/plugins/parseTime';

test('parses time string correctly', () => {
  const timeString = '12:30:45';
  const date = new Date();
  date.setUTCHours(12, 30, 45, 0);
  const parsedDate = parseTime(timeString);
  expect(parsedDate.getUTCHours()).toBe(12);
  expect(parsedDate.getUTCMinutes()).toBe(30);
  expect(parsedDate.getUTCSeconds()).toBe(45);
});