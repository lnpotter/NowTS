import toISO from '../src/plugins/toISO';

test('converts date to ISO string correctly', () => {
  const date = new Date('2024-01-01T00:00:00Z');
  const isoString = toISO(date);
  expect(isoString).toBe('2024-01-01T00:00:00.000Z');
});
