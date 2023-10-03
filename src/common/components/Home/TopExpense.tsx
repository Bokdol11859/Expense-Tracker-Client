import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CircleDollarIcon, TrendingUpIcon } from "@/common/icons";
import { ExtraButton } from "../ExtraButton/ExtraButton";

const dummyData: { cost: number; description: string }[] = [
  {
    cost: 150,
    description:
      "Movie with friendsMovie with friendsMovie with friendsMovie with friendsMovie with friendsMovie with friendsMovie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
  {
    cost: 150,
    description: "Movie with friends",
  },
];

export const TopExpense = React.memo(() => {
  return (
    <Card className="col-span-1 row-span-3 flex flex-col">
      <CardHeader className="flex-shrink-0">
        <CardTitle className="flex justify-between">
          Top Expenses
          <div className="text-gray-500">
            <TrendingUpIcon />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full flex-grow h-[450px] overflow-y-auto px-0">
        <table className="w-full divide-y border-y-2 divide-zinc-200 dark:divide-zinc-800 overflow-y-scroll">
          <thead className="bg-zinc-100 dark:bg-zinc-800 text-left">
            <tr>
              <th className="px-6 py-3 text-sm text-zinc-500 uppercase tracking-wider">
                Cost
              </th>
              <th className="px-6 py-3 text-sm text-zinc-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="w-full h-full bg-white divide-y divide-zinc-200 dark:bg-zinc-900 dark:divide-zinc-800">
            {dummyData.map(({ cost, description }) => (
              <tr key={description}>
                <td className="px-6 py-4 whitespace-nowrap text-md font-bold text-zinc-900">
                  ${cost}
                </td>
                <td className="flex w-[250px] px-6 py-4 whitespace-nowrap overflow-hidden text-sm text-zinc-900 text-ellipsis">
                  {description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
});

TopExpense.displayName = "TopExpense";
