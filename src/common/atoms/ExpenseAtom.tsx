import { atom } from "jotai";
import { Expense } from "@/app/expenses/page";
import { dateAtom } from "./DateAtom";
import { addDays } from "date-fns";

export const expenseAtom = atom<Expense[]>([]);

export const filteredExpenseAtom = atom<Expense[]>((get) =>
  get(expenseAtom).filter((expense) => {
    const date = get(dateAtom);
    if (!date || !date.from) return false;

    if (!date.to)
      return (
        date.from.getTime() <= expense.date.getTime() &&
        expense.date.getTime() < addDays(date.from, 1).getTime()
      );

    return (
      date.from.getTime() <= expense.date.getTime() &&
      expense.date.getTime() < addDays(date.to, 1).getTime()
    );
  })
);
