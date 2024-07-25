import endOfMonth from '../src/plugins/endOfMonth';

test('gets end of month correctly', () => {
  const date = new Date('2024-01-15T00:00:00Z');
  const endOfMonthDate = endOfMonth(date);
  expect(endOfMonthDate.toISOString()).toBe('2024-01-31T23:59:59.999Z');
});
