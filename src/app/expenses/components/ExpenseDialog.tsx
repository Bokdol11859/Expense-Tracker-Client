"use client";

import React from "react";
import { Calendar } from "@/common/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/ui/popover";
import { Button } from "@/common/components/ui/button";
import { cn } from "@/common/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Label } from "@/common/components/ui/label";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/common/components/ui/dialog";
import { Input } from "@/common/components/ui/input";
import { SelectSingleEventHandler } from "react-day-picker";

export interface ExpenseDialogType {
  title: string;
  date?: Date;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  description?: string;
  setDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
  amount?: number;
  setAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
  footerButton: React.ReactElement;
}

export const ExpenseDialog = React.memo(
  ({
    title,
    date,
    setDate,
    description,
    setDescription,
    amount,
    setAmount,
    footerButton,
  }: ExpenseDialogType) => {
    return (
      <DialogContent className="border-x-0 md:border">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "col-span-3 justify-start h-10 px-3",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <Label className=" font-normal">Pick a date</Label>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate as SelectSingleEventHandler}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder=""
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) =>
                setAmount(Number(Number(e.target.value).toFixed(2)))
              }
              id="amount"
              placeholder="74,000"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>{footerButton}</DialogFooter>
      </DialogContent>
    );
  }
);

ExpenseDialog.displayName = "Expense Add Alert";
