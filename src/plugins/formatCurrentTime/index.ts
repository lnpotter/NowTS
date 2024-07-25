export default function formatCurrentTime(formatString: string = 'HH:mm:ss', timezone?: string): string {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezone || 'UTC',
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);
    const map: { [key: string]: string } = {};
    parts.forEach(({ type, value }) => {
      map[type] = value;
    });
    return formatString
      .replace('HH', map.hour)
      .replace('mm', map.minute)
      .replace('ss', map.second);
  }
  