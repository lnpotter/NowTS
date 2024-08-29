import isBusinessDay from '../src/plugins/isBusinessDay';

describe('isBusinessDay', () => {
  const holidays = [new Date('2024-01-01'), new Date('2024-12-25')];

  test('returns true for a regular weekday', () => {
    expect(isBusinessDay(new Date('2024-01-03'))).toBe(true);
  });

  test('returns false for a weekend', () => {
    expect(isBusinessDay(new Date('2024-01-06'))).toBe(false);
  });

  test('returns false for a holiday', () => {
    expect(isBusinessDay(new Date('2024-01-01'), holidays)).toBe(false);
  });

  test('returns false for a weekend that is also a holiday', () => {
    expect(isBusinessDay(new Date('2024-12-25'), holidays)).toBe(false);
  });

  test('returns true for a day that is not a weekend or holiday', () => {
    expect(isBusinessDay(new Date('2024-12-24'), holidays)).toBe(true);
  });
});
