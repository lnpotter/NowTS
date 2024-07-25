import subtractDaysFromDate from '../src/plugins/subtractDaysFromDate';

test('subtracts days from date correctly', () => {
  const date = new Date('2024-01-01T00:00:00Z');
  const newDate = subtractDaysFromDate(date, 5);
  expect(newDate.toISOString()).toBe('2023-12-27T00:00:00.000Z');
});
