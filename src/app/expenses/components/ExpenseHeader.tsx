"use client";

import { Button } from "@/common/components/ui/button";
import { Calendar } from "@/common/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/ui/popover";
import { cn } from "@/common/lib/utils";
import { CalendarIcon, PlusIcon } from "@radix-ui/react-icons";
import { addDays, differenceInCalendarDays, format } from "date-fns";
import React from "react";
import { DateRange } from "react-day-picker";

type SelectedDateRange = "Day" | "Week" | "Month" | "Free" | "Null";

export const ExpenseHeader = React.memo(() => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 0),
  });
  const [dateRange, setDateRange] = React.useState<SelectedDateRange>("Day");

  const formattedDate = React.useMemo((): React.ReactElement => {
    if (!date || !date.from || !date.to) return <span>Pick a date</span>;

    switch (dateRange) {
      case "Day":
        return <>{format(date.from, "LLL dd y")}</>;
      case "Free":
      case "Week":
        return (
          <>
            {format(date.from, "LLL dd y")} - {format(date.to, "LLL dd y")}
          </>
        );
      case "Month":
        return <>{format(date.from, "LLLL y")}</>;
      default:
        throw new Error("Impossible");
    }
  }, [dateRange, date]);

  const isFullMonthDifference = React.useCallback(
    (start: Date, end: Date): boolean => {
      const nextMonthStart = new Date(
        start.getFullYear(),
        start.getMonth() + 1,
        0
      );
      return nextMonthStart.getTime() === end.getTime();
    },
    []
  );

  const getDateRangeFromDate = React.useCallback(
    (date: DateRange | undefined): SelectedDateRange => {
      if (!date || !date.from || !date.to) return "Null";

      const diff = differenceInCalendarDays(date.from, date.to);

      if (diff === 0) return "Day";
      if (diff === 7) return "Week";
      if (isFullMonthDifference(date.from, date.to)) return "Month";
      return "Free";
    },
    [isFullMonthDifference]
  );

  return (
    <div className="w-full flex flex-row justify-between items-center gap-4">
      <div className="grid gap-2 w-full">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-full md:w-fit justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {formattedDate}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              className="hidden md:block"
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(e) => {
                setDate(e);
                setDateRange(getDateRangeFromDate(e));
              }}
              numberOfMonths={2}
            />
            <Calendar
              className="md:hidden block"
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={(e) => {
                setDate(e);
                setDateRange(getDateRangeFromDate(e));
              }}
              numberOfMonths={1}
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button className="flex-shrink-0 hidden md:block">New Expense</Button>
      <Button size={"icon"} className="flex-shrink-0 block md:hidden">
        <PlusIcon className="m-auto" />
      </Button>
    </div>
  );
});

ExpenseHeader.displayName = "ExpenseHeader";
