"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { TooltipItem } from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GraphIcon } from "@/common/icons";
import { Expense } from "@/app/expenses/page";
import { useAtomValue } from "jotai";
import { dateAtom } from "@/common/atoms/DateAtom";
import { DateRange } from "react-day-picker";
Chart.register(...registerables);

const generateDateList = (startDate: Date, endDate: Date): Date[] => {
  let dateList: Date[] = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dateList.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateList;
};

const generateChartData = (
  expenses: Expense[],
  dateRange: DateRange | undefined
) => {
  if (!dateRange || !dateRange.from || !dateRange.to) {
    return {
      labels: [],
      datasets: [],
    };
  }

  const allDates = generateDateList(dateRange.from, dateRange.to);

  const data = {
    labels: allDates.map((date) => date.toDateString()),
    datasets: [
      {
        data: allDates.map((date) => {
          const expenseForDate = expenses.find(
            (exp) => exp.date.toDateString() === date.toDateString()
          );
          return expenseForDate ? expenseForDate.amount : 0;
        }),
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  return data;
};

export const ExpenseBarGraph = React.memo(
  ({ expenses }: { expenses: Expense[] }) => {
    const date = useAtomValue(dateAtom);

    const data = generateChartData(expenses, date);

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          },
          ticks: {
            display: true,
            callback: function (value: string | number) {
              return "$" + value;
            },
          },
          borderSkipped: false,
          title: {
            display: false,
          },
        },
        x: {
          beginAtZero: true,
          grid: {
            display: false,
          },
          ticks: {
            display: true,
          },
          borderSkipped: false,
          title: {
            display: false,
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context: TooltipItem<"bar">) {
              const label = context.dataset.label
                ? context.dataset.label + ": "
                : "";
              const value = context.parsed.y;
              return label + "$" + value;
            },
          },
        },
        legend: {
          display: false,
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    };

    return (
      <Card className="col-span-2 row-span-4 flex flex-col">
        <CardHeader>
          <CardTitle className="flex justify-between">
            Overview
            <div className="text-gray-500">
              <GraphIcon />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full h-full p-2 md:p-6">
          <div className="w-full h-full flex items-center justify-center">
            <Bar data={data} options={options} />
          </div>
        </CardContent>
      </Card>
    );
  }
);

ExpenseBarGraph.displayName = "ExpenseBarGraph";
