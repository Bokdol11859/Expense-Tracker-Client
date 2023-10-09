"use client";

import { ExpenseHeader } from "./ExpenseHeader";
import { ExpenseTable } from "./ExpenseTable";
import { ExpenseDialog } from "./ExpenseDialog";
import { Dialog } from "@/common/components/ui/dialog";
import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { Expense as ExpenseType } from "../page";
import { Button } from "@/common/components/ui/button";

export type ExpenseDialogVariant = "Create" | "Update";

export function Expense({ expenses }: { expenses: ExpenseType[] }) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 0),
  });
  const filteredExpenses = expenses.filter((expense) => {
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
  });
  const [dialogState, setDialogState] =
    React.useState<ExpenseDialogVariant>("Create");
  const [dialogDate, setDialogDate] = React.useState<Date>();
  const [dialogDescription, setDialogDescription] = React.useState<string>();
  const [dialogAmount, setDialogAmount] = React.useState<number>();
  const dialogTitle = React.useMemo(
    () =>
      dialogState === "Create"
        ? "Create New Expense Record"
        : "Update Expense Record",
    [dialogState]
  );
  const dialogFooterButton = React.useMemo(
    () =>
      dialogState === "Create" ? (
        <Button>{"Create"}</Button>
      ) : (
        <Button>{"Update"}</Button>
      ),
    [dialogState]
  );

  const resetDialog = React.useCallback(() => {
    setDialogDate(undefined);
    setDialogDescription(undefined);
    setDialogAmount(undefined);
  }, []);

  const updateDialog = React.useCallback(
    ({ date, description, amount }: Partial<ExpenseType>) => {
      setDialogDate(date);
      setDialogDescription(description);
      setDialogAmount(amount);
    },
    []
  );

  const setDialogStateToCreate = React.useMemo(() => {
    return () => {
      setDialogState("Create");
      resetDialog();
    };
  }, [resetDialog]);

  const setDialogStateToUpdate = React.useMemo(() => {
    return (selectedExpenseId: string) => {
      setDialogState("Update");
      const targetExpense = expenses.find(
        (expense) => expense.id === selectedExpenseId
      );
      updateDialog({ ...targetExpense });
    };
  }, [expenses, updateDialog]);

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 px-0 md:gap-6 md:p-6 overflow-y-auto w-full">
      <Dialog>
        <ExpenseHeader
          onCreateButtonClick={setDialogStateToCreate}
          date={date}
          setDate={setDate}
        />
        <ExpenseTable
          onRowClick={setDialogStateToUpdate}
          expenses={filteredExpenses}
        />
        <ExpenseDialog
          title={dialogTitle}
          date={dialogDate}
          setDate={setDialogDate}
          description={dialogDescription}
          setDescription={setDialogDescription}
          amount={dialogAmount}
          setAmount={setDialogAmount}
          footerButton={dialogFooterButton}
        />
      </Dialog>
    </main>
  );
}
