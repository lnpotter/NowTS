import addDaysToDate from '../src/plugins/addDaysToDate';

test('adds days to date correctly', () => {
  const date = new Date('2024-01-01T00:00:00Z');
  const newDate = addDaysToDate(date, 5);
  expect(newDate.toISOString()).toBe('2024-01-06T00:00:00.000Z');
});
