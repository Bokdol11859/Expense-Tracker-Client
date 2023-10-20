"use client";

import {
  DashboardIcon,
  ExpenseIcon,
  LogoIcon,
  SettingIcon,
} from "@/common/icons";
import Link from "next/link";
import React from "react";
import { Tab } from "./Tab";
import { cn } from "@/common/lib/utils";

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
  // {
  //   label: "Stocks",
  //   value: "/stocks",
  //   icon: <StockIcon />,
  // },
];

export const LeftNavigationBar = React.memo(
  ({ isShowing }: { isShowing?: boolean }) => {
    return (
      <div
        className={cn(
          "hidden border-r h-full bg-zinc-100/40 md:block dark:bg-zinc-800/40 min-w-[250px]",
          isShowing && "block"
        )}
      >
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
          {/* <div className="px-4 py-6 text-sm font-medium">
            <div className="flex items-center gap-3 rounded-lg bg-zinc-100 px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50">
              <SettingIcon />
            </div>
          </div> */}
          {/* <div className="flex items-center justify-center pb-4">
            <Calendar initialFocus mode="single" />
          </div> */}
        </div>
      </div>
    );
  }
);

LeftNavigationBar.displayName = "LeftNavigationBar";
