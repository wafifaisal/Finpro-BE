import Holidays from "date-holidays";
import { eachDayOfInterval, format, isWeekend } from "date-fns";

const hd = new Holidays("ID");

export function computeRecurringDates(
  startDateStr: string,
  endDateStr: string,
  applyWeekend: boolean,
  applyHoliday: boolean
): string[] {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const allDates = eachDayOfInterval({ start: startDate, end: endDate });
  return allDates
    .filter((date) => {
      const weekend = isWeekend(date);
      const holiday = hd.isHoliday(date) ? true : false;
      if (applyWeekend && applyHoliday) return weekend || holiday;
      if (applyWeekend) return weekend;
      if (applyHoliday) return holiday;
      return false;
    })
    .map((date) => format(date, "yyyy-MM-dd"));
}
