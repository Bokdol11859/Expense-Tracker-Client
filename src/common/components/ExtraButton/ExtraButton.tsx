import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

export const ExtraButton = React.memo(() => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost">...</Button>
      </PopoverTrigger>
      <PopoverContent className="w-28 p-0">
        <div className="flex flex-col">
          <p className="p-4 border-b-2 font-semibold text-zinc-900 hover:bg-slate-100 cursor-pointer">
            Edit
          </p>
          <p className="p-4 font-semibold text-red-500 hover:bg-slate-100 cursor-pointer">
            Delete
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
});

ExtraButton.displayName = "ExtraButton";
