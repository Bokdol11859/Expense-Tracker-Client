import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { CircleDollarIcon, GraphIcon, TrendingUpIcon } from "@/common/icons";
import { ExpenseBarGraph } from "./ExpensebarGraph";
import { TotalExpense } from "./TotalExpense";
import { TopExpense } from "./TopExpense";

export const Home = React.memo(() => {
  return (
    <div className="w-full h-full overflow-y-scroll gap-4 p-6 flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-4s">
      <ExpenseBarGraph />
      <TotalExpense />
      <TopExpense />
    </div>
  );
});

Home.displayName = "Home";
