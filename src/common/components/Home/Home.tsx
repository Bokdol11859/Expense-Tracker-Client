import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { CircleDollarIcon, GraphIcon, TrendingUpIcon } from "@/common/icons";
import { ExpenseBarGraph } from "./ExpensebarGraph";
import { TotalExpense } from "./TotalExpense";
import { TopExpense } from "./TopExpense";

export const Home = React.memo(() => {
  return (
    <div className="flex-grow flex-1 w-full h-full grid grid-cols-3 grid-rows-4 gap-4 p-6">
      <ExpenseBarGraph />
      <TotalExpense />
      <TopExpense />
      <Card className="col-span-1 row-span-1">
        <CardHeader>{/* <CardTitle>This is Graph</CardTitle> */}</CardHeader>
      </Card>
      <Card className="col-span-1 row-span-1">
        <CardHeader>{/* <CardTitle>This is Graph</CardTitle> */}</CardHeader>
      </Card>
    </div>
  );
});

Home.displayName = "Home";
