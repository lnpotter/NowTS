import addHoursToDate from '../src/plugins/addHoursToDate';

test('adds hours to date correctly', () => {
  const date = new Date('2024-01-01T00:00:00Z');
  const newDate = addHoursToDate(date, 5);
  expect(newDate.toISOString()).toBe('2024-01-01T05:00:00.000Z');
});
