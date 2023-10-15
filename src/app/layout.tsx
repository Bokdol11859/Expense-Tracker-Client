import { LeftNavigationBar } from "@/common/components/LeftNavigationBar";
import { TopNavigationBar } from "@/common/components/TopNavigationBar";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { inter } from "./font";
import { RootProvider } from "./RootProvider";

import "./globals.css";

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
        <RootProvider>
          <div className="flex h-full w-full m-auto border-x min-w-[365px]">
            <LeftNavigationBar />
            <div className="flex flex-col w-full h-full">
              <TopNavigationBar />
              {children}
              <Analytics />
            </div>
          </div>
        </RootProvider>
      </body>
    </html>
  );
}
