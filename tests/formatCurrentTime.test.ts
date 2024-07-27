import formatCurrentTime from '../src/plugins/formatCurrentTime';

test('formats current time correctly', () => {
  const currentTime = new Date();
  const formattedTime = formatCurrentTime('HH:mm:ss', 'UTC');
  
  const expectedTime = currentTime.toISOString().slice(11, 19);
  expect(formattedTime).toBe(expectedTime);
});