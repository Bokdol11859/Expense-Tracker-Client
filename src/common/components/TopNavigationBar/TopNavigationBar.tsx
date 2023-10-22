"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ColumnIcon, SettingIcon, UserIcon } from "@/common/icons";
import { LeftNavigationBar } from "../LeftNavigationBar";
import { DatePicker } from "./DatePicker";
import { useAuth } from "@/common/hooks/useAuth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const TopNavigationBar = React.memo(() => {
  const router = useRouter();

  const { isLoggedIn, userInfo } = useAuth();

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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer border border-gray-300">
                <AvatarImage src="https://avatars.githubusercontent.com/u/80627536?v=4" />
                <AvatarFallback>EP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" absolute w-56 -right-5 overflow-hidden">
              <div className="flex gap-2 items-center justify-start px-1 py-1.5">
                <Avatar className=" border border-gray-300">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/80627536?v=4" />
                  <AvatarFallback>EP</AvatarFallback>
                </Avatar>
                <div>
                  <p className="py-0 pl-0 text-sm font-semibold">
                    {userInfo?.firstName} {userInfo?.lastName}
                  </p>
                  <p className="py-0 pl-0 text-xs text-gray-500">
                    {userInfo?.email}
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex justify-start gap-2 items-center cursor-pointer p-2">
                <UserIcon />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="flex justify-start gap-2 items-center cursor-pointer p-2">
                <SettingIcon />
                Setting
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
