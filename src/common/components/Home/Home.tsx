"use client";

import React from "react";

import { ExpenseBarGraph } from "./ExpensebarGraph";
import { TotalExpense } from "./TotalExpense";
import { TopExpense } from "./TopExpense";
import { useAtomValue } from "jotai";
import { filteredExpenseAtom } from "@/common/atoms/ExpenseAtom";

export const Home = React.memo(() => {
  const expenses = useAtomValue(filteredExpenseAtom);
  const expensesSortedByPrice = React.useMemo(
    () => expenses.sort((a, b) => b.amount - a.amount),
    [expenses]
  );
  const expensesSortedByDate = React.useMemo(
    () => expenses.sort((a, b) => a.date.getTime() - b.date.getTime()),
    [expenses]
  );
  return (
    <div className="w-full h-full overflow-y-scroll gap-4 p-3 md:p-6 flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-4s">
      <ExpenseBarGraph expenses={expensesSortedByDate} />
      <TotalExpense expenses={expenses} />
      <TopExpense expenses={expensesSortedByPrice} />
    </div>
  );
});

Home.displayName = "Home";
