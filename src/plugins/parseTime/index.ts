export default function parseTime(timeString: string, formatString: string = 'HH:mm:ss', timezone?: string): Date {
    const now = new Date();
    const hoursIndex = formatString.indexOf('HH');
    const minutesIndex = formatString.indexOf('mm');
    const secondsIndex = formatString.indexOf('ss');
    
    const hours = parseInt(timeString.substr(hoursIndex, 2));
    const minutes = parseInt(timeString.substr(minutesIndex, 2));
    const seconds = parseInt(timeString.substr(secondsIndex, 2));
    
    return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, seconds));
  }
  