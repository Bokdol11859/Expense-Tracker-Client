import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CircleDollarIcon, TrendingUpIcon } from "@/common/icons";
import { ExpenseTable } from "@/app/expenses/components/ExpenseTable";
import expenses_ from "@/expense.json";
import { Expense } from "@/app/expenses/page";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function formatDate(date: Date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[date.getDay()];
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-based
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

export const TopExpense = React.memo(() => {
  const expenses: Expense[] = React.useMemo(
    () =>
      expenses_
        .sort((a, b) => {
          return b.amount - a.amount;
        })
        .map((expense) => {
          return {
            ...expense,
            date: new Date(expense.date),
          };
        })
        .slice(0, 10),
    []
  );

  return (
    <Card className="col-span-1 row-span-3 flex flex-col w-full">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex justify-between">
          Top Expenses
          <div className="text-gray-500">
            <TrendingUpIcon />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full flex-grow h-[450px] overflow-y-auto px-0">
        <Table className=" table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] md:w-[120px]">Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="w-[100px] text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense: Expense) => (
              <TableRow key={expense.id} className="cursor-pointer">
                <TableCell className="font-medium">
                  {formatDate(new Date(expense.date))}
                </TableCell>
                <TableCell className="break-words	">
                  {expense.description}
                </TableCell>
                <TableCell className="text-right">${expense.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
});

TopExpense.displayName = "TopExpense";
