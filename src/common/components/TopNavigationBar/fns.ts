import { SelectedDateRange } from "@/common/atoms/DateAtom";
import { differenceInCalendarDays } from "date-fns";
import { DateRange } from "react-day-picker";

export const isFullMonthDifference = (start: Date, end: Date): boolean => {
  if (start.getDate() !== 1) return false;

  const nextMonthStart = new Date(start.getFullYear(), start.getMonth() + 1, 0);
  return nextMonthStart.getTime() === end.getTime();
};

export const getDateRangeFromDate = (
  date: DateRange | undefined
): SelectedDateRange => {
  if (!date || !date.from || !date.to) return "Null";

  const diff = differenceInCalendarDays(date.from, date.to);

  if (diff === 0) return "Day";
  if (diff === 7) return "Week";
  if (isFullMonthDifference(date.from, date.to)) return "Month";
  return "Free";
};
