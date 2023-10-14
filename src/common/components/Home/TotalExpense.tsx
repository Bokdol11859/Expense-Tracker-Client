import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CircleDollarIcon } from "@/common/icons";
import { Expense } from "@/app/expenses/page";

export const TotalExpense = React.memo(
  ({ expenses }: { expenses: Expense[] }) => {
    const totalExpense = expenses.reduce((p, c) => {
      return p + c.amount;
    }, 0);

    return (
      <Card className="col-span-1 flex flex-col h-full w-full">
        <CardHeader>
          <CardTitle className="flex justify-between">
            Total Expense
            <div className="text-gray-500">
              <CircleDollarIcon />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-full">
          <p className="text-4xl font-bold">$ {totalExpense}</p>
        </CardContent>
      </Card>
    );
  }
);

TotalExpense.displayName = "TotalExpense";
