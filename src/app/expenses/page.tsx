"use client";

import { Expense } from "@/app/expenses/components/Expense";
import { filteredExpenseAtom } from "@/common/atoms/ExpenseAtom";
import { useAtomValue } from "jotai";

export type Expense = {
  id: string;
  date: Date;
  description: string;
  amount: number;
};

export default function Page() {
  const expenses = useAtomValue(filteredExpenseAtom).sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return <Expense expenses={expenses} />;
}
