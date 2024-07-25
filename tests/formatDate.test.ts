import formatDate from '../src/plugins/formatDate';

test('formats date correctly', () => {
  const date = new Date('2024-01-01T00:00:00Z');
  const formattedDate = formatDate(date, 'YYYY-MM-DD');
  expect(formattedDate).toBe('2024-01-01');
});
