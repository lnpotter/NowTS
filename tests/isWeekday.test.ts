import isWeekday from '../src/plugins/isWeekday';

test('checks if a date falls on a weekday', () => {
  expect(isWeekday(new Date('2024-07-29'))).toBe(true); // Monday
  expect(isWeekday(new Date('2024-07-30'))).toBe(true); // Tuesday
  expect(isWeekday(new Date('2024-07-27'))).toBe(false); // Saturday
  expect(isWeekday(new Date('2024-07-28'))).toBe(false); // Sunday
});