"use client";

import { ExpenseTable } from "./ExpenseTable";
import { ExpenseDialog } from "./ExpenseDialog";
import {
  Dialog,
  DialogClose,
  DialogTrigger,
} from "@/common/components/ui/dialog";
import React from "react";
import { Expense as ExpenseType } from "../page";
import { Button } from "@/common/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { useQueryClient } from "@tanstack/react-query";
import {
  createExpense,
  deleteExpense,
  updateExpense,
} from "@/common/api/fetcher";
import { KEYS } from "@/keys";
import { Expense } from "@/common/entities/expense.entity";

export type ExpenseDialogVariant = "Create" | "Update";

const cleanExpense = (expense: Partial<Expense>) => {
  return Object.fromEntries(
    Object.entries(expense).filter(([key, value]) => value !== undefined)
  );
};

export function Expense({ expenses }: { expenses: ExpenseType[] }) {
  const queryClient = useQueryClient();

  const [dialogState, setDialogState] =
    React.useState<ExpenseDialogVariant>("Create");
  const [dialogDate, setDialogDate] = React.useState<Date>();
  const [dialogDescription, setDialogDescription] = React.useState<string>();
  const [dialogAmount, setDialogAmount] = React.useState<number>();
  const [selectedId, setSelectedId] = React.useState<string>();

  const dialogTitle = React.useMemo(
    () =>
      dialogState === "Create"
        ? "Create New Expense Record"
        : "Update Expense Record",
    [dialogState]
  );

  const handleCreateButtonClick = React.useCallback(async () => {
    if (!dialogDate || !dialogDescription || !dialogAmount) return;

    try {
      await createExpense({
        date: dialogDate.toDateString(),
        description: dialogDescription,
        amount: dialogAmount,
      });
      queryClient.invalidateQueries([KEYS.expenses]);
    } catch (e) {
      console.error(e);
    }
  }, [dialogAmount, dialogDate, dialogDescription, queryClient]);

  const handleUpdateButtonClick = React.useCallback(async () => {
    if (!selectedId) return;

    try {
      await updateExpense(
        selectedId,
        cleanExpense({
          date: dialogDate?.toDateString(),
          description: dialogDescription,
          amount: dialogAmount,
        })
      );
      queryClient.invalidateQueries([KEYS.expenses]);
    } catch (e) {
      console.error(e);
    }
  }, [dialogAmount, dialogDate, dialogDescription, queryClient, selectedId]);

  const handleDeleteButtonClick = React.useCallback(async () => {
    if (!selectedId) return;
    try {
      await deleteExpense(selectedId);
      queryClient.invalidateQueries([KEYS.expenses]);
    } catch (e) {
      console.error(e);
    }
  }, [queryClient, selectedId]);

  const dialogFooterButton = React.useMemo(
    () =>
      dialogState === "Create" ? (
        <DialogClose asChild>
          <Button onClick={handleCreateButtonClick}>{"Create"}</Button>
        </DialogClose>
      ) : (
        <div className="w-full flex items-center justify-between">
          <DialogClose asChild>
            <Button onClick={handleDeleteButtonClick} variant={"destructive"}>
              {"Delete"}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={handleUpdateButtonClick}>{"Update"}</Button>
          </DialogClose>
        </div>
      ),
    [dialogState, handleCreateButtonClick, handleUpdateButtonClick]
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
      setSelectedId(selectedExpenseId);
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
