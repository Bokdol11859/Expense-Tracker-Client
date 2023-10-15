"use client";

import { ExpenseTable } from "./ExpenseTable";
import { ExpenseDialog } from "./ExpenseDialog";
import { Dialog } from "@/common/components/ui/dialog";
import React from "react";
import { Expense as ExpenseType } from "../page";
import { Button } from "@/common/components/ui/button";
import { DialogTrigger } from "node_modules/@radix-ui/react-dialog/dist/index.mjs";
import { PlusIcon } from "@radix-ui/react-icons";

export type ExpenseDialogVariant = "Create" | "Update";

export function Expense({ expenses }: { expenses: ExpenseType[] }) {
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

  const handleCreateButtonClick = React.useCallback(() => {}, []);

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

  const setDialogStateToCreate = React.useCallback(() => {
    setDialogState("Create");
    resetDialog();
  }, [resetDialog]);

  const setDialogStateToUpdate = React.useCallback(
    (selectedExpenseId: string) => {
      setDialogState("Update");
      const targetExpense = expenses.find(
        (expense) => expense.id === selectedExpenseId
      );
      updateDialog({ ...targetExpense });
    },
    [expenses, updateDialog]
  );

  return (
    <main className="relative flex flex-1 flex-col gap-4 p-4 px-0 md:gap-6 md:p-6 overflow-y-auto w-full">
      <Dialog>
        <ExpenseTable onRowClick={setDialogStateToUpdate} expenses={expenses} />
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
        <DialogTrigger>
          <div
            onClick={setDialogStateToCreate}
            className=" absolute bottom-6 right-6 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
          >
            <PlusIcon width={24} height={24} />
          </div>
        </DialogTrigger>
      </Dialog>
    </main>
  );
}
