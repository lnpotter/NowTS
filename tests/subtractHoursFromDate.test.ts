import subtractHoursFromDate from '../src/plugins/subtractHoursFromDate';

test('subtracts hours from date correctly', () => {
  const date = new Date('2024-01-01T05:00:00Z');
  const newDate = subtractHoursFromDate(date, 5);
  expect(newDate.toISOString()).toBe('2024-01-01T00:00:00.000Z');
});