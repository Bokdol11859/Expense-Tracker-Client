import { CommandIcon } from "@/common/icons";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Expense Tracker - Signup",
  description: "Generated by create next app",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col overflow-auto h-[calc(100%-60px)]">
      <main className="flex flex-1 flex-col h-full gap-8 p-3 lg:flex-row">
        <div className="flex-1 h-full rounded-lg border border-zinc-200 dark:border-zinc-800 flex">
          <div className="hidden w-full h-full bg-zinc-900 rounded-l-lg xl:block">
            <div className="w-full h-full flex flex-col items-center justify-between p-4">
              <div className="w-full text-white flex gap-2 items-center justify-start">
                <CommandIcon />
                <h3 className=" text-xl">Bokdol Inc.</h3>
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-full h-full">{children}</div>
        </div>
      </main>
    </div>
  );
}
