export default function formatDate(date: Date, formatString: string, timezone?: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezone || 'UTC',
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);
    const map: { [key: string]: string } = {};
    parts.forEach(({ type, value }) => {
      map[type] = value;
    });
    return formatString
      .replace('YYYY', map.year)
      .replace('MM', map.month)
      .replace('DD', map.day)
      .replace('HH', map.hour)
      .replace('mm', map.minute)
      .replace('ss', map.second);
  }
  