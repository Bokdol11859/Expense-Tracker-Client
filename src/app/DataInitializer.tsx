"use client";

import React from "react";
import { getAllExpense } from "@/common/api/fetcher";
import { expenseAtom } from "@/common/atoms/ExpenseAtom";
import { useQuery } from "@tanstack/react-query";
import { useSetAtom } from "jotai";

export const DataIntializer = React.memo(() => {
  const setExpense = useSetAtom(expenseAtom);

  useQuery({
    queryKey: ["expenses"],
    queryFn: async () => {
      const data = (await getAllExpense()).map((expense) => {
        return {
          ...expense,
          date: new Date(expense.date),
        };
      });

      setExpense(data);
      return data;
    },
  });

  return null;
});

DataIntializer.displayName = "DataIntializer";
