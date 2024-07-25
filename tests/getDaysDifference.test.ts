import getDaysDifference from '../src/plugins/getDaysDifference';

test('calculates days difference between two dates', () => {
  const date1 = new Date('2024-01-01T00:00:00Z');
  const date2 = new Date('2024-01-10T00:00:00Z');
  const difference = getDaysDifference(date1, date2);
  expect(difference).toBe(9);
});
