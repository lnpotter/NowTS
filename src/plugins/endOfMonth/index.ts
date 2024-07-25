export default function endOfMonth(date: Date): Date {
    const startOfNextMonth = new Date(Date.UTC(date.getFullYear(), date.getMonth() + 1, 1));
    return new Date(startOfNextMonth.getTime() - 1);
  }
  