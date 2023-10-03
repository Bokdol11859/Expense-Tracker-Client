"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { TooltipItem } from "chart.js";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GraphIcon } from "@/common/icons";
Chart.register(...registerables);

export const ExpenseBarGraph = React.memo(() => {
  const currentDate = new Date();
  const data = {
    labels: [
      ...Array(5)
        .fill("")
        .map((_, i) =>
          new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - (5 - (i + 1))
          ).toDateString()
        ),
    ],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  };

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
    <Card className="col-span-2 row-span-3 flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between">
          Overview
          <div className="text-gray-500">
            <GraphIcon />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full h-full">
        <div className="w-full h-full flex items-center justify-center">
          <Bar data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
});

ExpenseBarGraph.displayName = "ExpenseBarGraph";
