import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CircleDollarIcon } from "@/common/icons";

export const TotalExpense = React.memo(() => {
  return (
    <Card className="col-span-1 flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex justify-between">
          Total Expense
          <div className="text-gray-500">
            <CircleDollarIcon />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center h-full">
        <p className="text-6xl font-bold">$ 10221.76</p>
      </CardContent>
    </Card>
  );
});

TotalExpense.displayName = "TotalExpense";
