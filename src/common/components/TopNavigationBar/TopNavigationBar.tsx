"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ColumnIcon } from "@/common/icons";
import { LeftNavigationBar } from "../LeftNavigationBar";
import { DatePicker } from "./DatePicker";
import { useAuth } from "@/common/hooks/useAuth";
import { DropdownMenu } from "./DropdownMenu";

export const TopNavigationBar = React.memo(() => {
  const router = useRouter();

  const { isLoggedIn } = useAuth();

  const handleLoginClick = React.useCallback(() => {
    router.push("/login");
  }, [router]);

  const handleSignupClick = React.useCallback(() => {
    router.push("/signup");
  }, [router]);

  return (
    <Sheet>
      <header className="sticky flex-shrink-0 top-0 flex h-[60px] items-center justify-between border-b bg-zinc-100 px-4 md:px-6 dark:bg-zinc-800/40 z-10">
        <div className="flex gap-3">
          <SheetTrigger className="block md:hidden">
            <ColumnIcon />
          </SheetTrigger>
          <DatePicker />
        </div>
        {isLoggedIn ? (
          <DropdownMenu />
        ) : (
          <div className="flex gap-2">
            <Button
              className="px-4 py-2"
              variant="outline"
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Button className="px-4 py-2" onClick={handleSignupClick}>
              Sign Up
            </Button>
          </div>
        )}
      </header>
      <SheetContent className="p-0" side={"left"}>
        <LeftNavigationBar isShowing />
      </SheetContent>
    </Sheet>
  );
});

TopNavigationBar.displayName = "TopNavigationBar";
