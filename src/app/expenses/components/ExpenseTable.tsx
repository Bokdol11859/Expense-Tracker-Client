import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/components/ui/table";
import React from "react";
import { Expense } from "../page";
import { DialogTrigger } from "@/common/components/ui/dialog";

function formatDate(date: Date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[date.getDay()];
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-based
  const year = date.getFullYear();

  return `${month}/${day}/${year}, ${dayName}`;
}

export const ExpenseTable = React.memo(
  ({
    expenses,
    onRowClick,
  }: {
    expenses: Expense[];
    onRowClick: (selectedExpenseId: string) => void;
  }) => {
    return (
      <Table className=" table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px] md:w-[160px]">Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="w-[100px] text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense: Expense) => (
            <DialogTrigger
              onClick={() => onRowClick(expense.id)}
              key={expense.id}
              asChild
              className=" appearance-none"
            >
              <TableRow className="cursor-pointer">
                <TableCell className="font-medium">
                  {formatDate(new Date(expense.date))}
                </TableCell>
                <TableCell className="break-words	">
                  {expense.description}
                </TableCell>
                <TableCell className="text-right">${expense.amount}</TableCell>
              </TableRow>
            </DialogTrigger>
          ))}
        </TableBody>
      </Table>
    );
  }
);

ExpenseTable.displayName = "Expense Table";
