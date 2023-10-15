"use client";

import {
  RestrictedSelectedDateRange,
  dateAtom,
  dateRangeAtom,
} from "@/common/atoms/DateAtom";
import { addDays, format } from "date-fns";
import { useAtom } from "jotai";
import React from "react";
import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { getDateRangeFromDate } from "./fns";

export const DatePicker = React.memo(() => {
  const [date, setDate] = useAtom(dateAtom);
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
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
  }, [date, dateRange]);

  const onDateRangeClick = React.useCallback(
    (dateRange: RestrictedSelectedDateRange) => {
      const today = new Date();
      switch (dateRange) {
        case "Day":
          setDate({
            from: today,
            to: today,
          });
          setDateRange("Day");
          return;

        case "Week":
          setDate({
            from: addDays(today, -7),
            to: today,
          });
          setDateRange("Week");

          return;

        case "Month":
          setDate({
            from: new Date(today.getFullYear(), today.getMonth(), 1),
            to: new Date(today.getFullYear(), today.getMonth() + 1, 0),
          });
          setDateRange("Month");

          return;
      }
    },
    [setDate, setDateRange]
  );

  return (
    <div className="grid gap-2 w-full">
      <Popover>
        <PopoverTrigger asChild>
          <div className="text-md font-medium cursor-pointer">
            {formattedDate}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex gap-4 p-3 pb-0">
            <Button variant={"outline"} onClick={() => onDateRangeClick("Day")}>
              Today
            </Button>
            <Button
              variant={"outline"}
              onClick={() => onDateRangeClick("Week")}
            >
              This Week
            </Button>
            <Button
              variant={"outline"}
              onClick={() => onDateRangeClick("Month")}
            >
              This Month
            </Button>
          </div>
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
  );
});

DatePicker.displayName = "DatePicker";
