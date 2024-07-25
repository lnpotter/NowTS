export default function subtractHoursFromDate(date: Date, hours: number, timezone?: string): Date {
    const result = new Date(date);
    result.setUTCHours(result.getUTCHours() - hours);
    return result;
  }
  