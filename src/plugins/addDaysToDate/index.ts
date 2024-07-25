export default function addDaysToDate(date: Date, days: number, timezone?: string): Date {
    const result = new Date(date);
    result.setUTCDate(result.getUTCDate() + days);
    return result;
  }
  