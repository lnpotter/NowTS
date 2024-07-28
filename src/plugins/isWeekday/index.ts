export default function isWeekday(date: Date): boolean {
    const day = date.getUTCDay();
    return day >= 1 && day <= 5;
}