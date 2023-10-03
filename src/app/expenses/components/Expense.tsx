import Link from "next/link";
import { Calendar } from "@/common/components/ui/calendar";
import { Button } from "@/common/components/ui/button";
import { TopNavigationBar } from "@/common/components/TopNavigationBar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/ui/popover";
import React from "react";
import { ExtraButton } from "@/common/components/ExtraButton/ExtraButton";

export function Expense() {
  return (
    <div className="flex flex-col overflow-auto">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 lg:flex-row">
        <div className="flex-1 rounded-lg border border-zinc-200 border-dashed dark:border-zinc-800">
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-zinc-200 dark:divide-zinc-800">
              <thead className="bg-zinc-100 dark:bg-zinc-800">
                <tr>
                  <th className="px-6 py-3 text-xs text-zinc-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-xs text-zinc-500 uppercase tracking-wider">
                    Cost
                  </th>
                  <th className="px-6 py-3 text-xs text-zinc-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-zinc-200 dark:bg-zinc-900 dark:divide-zinc-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Entertainment
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    $150
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 flex items-center justify-between">
                    Movie with friends
                    <ExtraButton />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Utilities
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    $200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 flex items-center justify-between">
                    Electricity bill
                    <ExtraButton />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Eating Out
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    $50
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 flex items-center justify-between">
                    Dinner at a restaurant
                    <ExtraButton />
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Groceries
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900">
                    $100
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 flex items-center justify-between">
                    Weekly groceries
                    <ExtraButton />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
