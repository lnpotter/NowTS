export default function addHoursToDate(date: Date, hours: number, timezone?: string): Date {
    const result = new Date(date);
    result.setUTCHours(result.getUTCHours() + hours);
    return result;
  }
  