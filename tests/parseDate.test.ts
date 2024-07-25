import parseDate from '../src/plugins/parseDate';

test('parses date string correctly', () => {
  const dateString = '2024-01-01T00:00:00Z';
  const parsedDate = parseDate(dateString, 'YYYY-MM-DDTHH:mm:ssZ');
  expect(parsedDate.toISOString().slice(0, 19) + 'Z').toBe(dateString);
});