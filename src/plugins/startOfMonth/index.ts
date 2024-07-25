export default function startOfMonth(date: Date): Date {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), 1));
  }
  