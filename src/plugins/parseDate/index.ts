export default function parseDate(dateString: string, formatString: string, timezone?: string): Date {
  if (timezone) {
    const date = new Date(dateString);
    const timeZoneOffset = new Date().getTimezoneOffset() * 60 * 1000;
    const timezoneOffset = date.getTime() + timeZoneOffset;
    return new Date(timezoneOffset);
  }
  return new Date(dateString);
}