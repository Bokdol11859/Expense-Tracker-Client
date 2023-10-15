import { atom } from "jotai";
import { DateRange } from "react-day-picker";

export type SelectedDateRange = "Day" | "Week" | "Month" | "Free" | "Null";
export type RestrictedSelectedDateRange = "Day" | "Week" | "Month";

const today = new Date();

export const dateAtom = atom<DateRange | undefined>({
  from: new Date(today.getFullYear(), today.getMonth(), 1),
  to: new Date(today.getFullYear(), today.getMonth() + 1, 0),
});

export const dateRangeAtom = atom<SelectedDateRange>("Month");
