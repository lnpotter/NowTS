import isSameDay from '../src/plugins/isSameDay';

test('checks if two dates are the same day', () => {
  expect(isSameDay(new Date('2024-07-29'), new Date('2024-07-29'))).toBe(true);
  expect(isSameDay(new Date('2024-07-29'), new Date('2024-07-30'))).toBe(false);
  expect(isSameDay(new Date('2024-07-29T00:00:00Z'), new Date('2024-07-29T23:59:59Z'))).toBe(true);
});
