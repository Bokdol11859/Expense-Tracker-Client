import { atom } from "jotai";
import { DateRange } from "react-day-picker";

const today = new Date();

export const dateAtom = atom<DateRange | undefined>({
  from: new Date(today.getFullYear(), today.getMonth(), 1),
  to: new Date(today.getFullYear(), today.getMonth() + 1, 0),
});
