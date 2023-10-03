import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CircleDollarIcon, GraphIcon, TrendingUpIcon } from "@/icons";
import { cn } from "@/lib/utils";
import { teko } from "@/app/font";

export const Home = React.memo(() => {
  return (
    <div className="flex-grow flex-1 w-full grid grid-cols-3 grid-rows-4 gap-4 p-6">
      <Card className="col-span-2 row-span-3">
        <CardHeader>
          <CardTitle className="flex justify-between">
            Overview
            <div className="text-gray-500">
              <GraphIcon />
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
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
      <Card className="col-span-1 row-span-3">
        <CardHeader>
          <CardTitle className="flex justify-between">
            Top Expenses
            <div className="text-gray-500">
              <TrendingUpIcon />
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
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
