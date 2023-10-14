import { LeftNavigationBar } from "@/common/components/LeftNavigationBar";
import { TopNavigationBar } from "@/common/components/TopNavigationBar";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { inter } from "./font";

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your expenses to be RICH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full w-full m-auto border-x min-w-[365px]">
          <LeftNavigationBar />
          <div className="flex flex-col w-full h-full">
            <TopNavigationBar />
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
