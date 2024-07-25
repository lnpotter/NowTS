import startOfMonth from '../src/plugins/startOfMonth';

test('gets start of month correctly', () => {
  const date = new Date('2024-01-15T00:00:00Z');
  const startOfMonthDate = startOfMonth(date);
  expect(startOfMonthDate.toISOString()).toBe('2024-01-01T00:00:00.000Z');
});
