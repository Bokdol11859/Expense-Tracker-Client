"use client";

import {
  DashboardIcon,
  ExpenseIcon,
  HomeIcon,
  LogoIcon,
  StockIcon,
} from "@/common/icons";
import Link from "next/link";
import React, { MemoExoticComponent } from "react";
import { Calendar } from "@/common/components/ui/calendar";
import { usePathname } from "next/navigation";
import { Tab } from "./Tab";

const tabs: {
  label: string;
  value: string;
  icon: React.ReactElement;
}[] = [
  {
    label: "Home",
    value: "/",
    icon: <DashboardIcon />,
  },
  {
    label: "Expenses",
    value: "/expenses",
    icon: <ExpenseIcon />,
  },
  {
    label: "Stocks",
    value: "/stocks",
    icon: <StockIcon />,
  },
];

export const LeftNavigationBar = React.memo(() => {
  return (
    <div className="border-r h-full bg-zinc-100/40 block dark:bg-zinc-800/40">
      <div className="flex flex-col justify-between h-full gap-2">
        <div>
          <div className="flex h-[60px] items-center px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <LogoIcon />
              <span>Expense Tracker</span>
            </Link>
          </div>
          <nav className="grid items-start px-4 text-sm font-medium">
            {tabs.map(({ label, value, icon }) => {
              return (
                <Tab key={value} label={label} value={value} icon={icon} />
              );
            })}
          </nav>
        </div>
        <div className="flex items-center justify-center pb-4">
          <Calendar initialFocus mode="single" />
        </div>
      </div>
    </div>
  );
});

LeftNavigationBar.displayName = "LeftNavigationBar";
