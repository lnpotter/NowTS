export default function getDaysDifference(startDate: Date, endDate: Date): number {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utcStart = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const utcEnd = Date.UTC(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    return Math.floor((utcEnd - utcStart) / MS_PER_DAY);
  }
  