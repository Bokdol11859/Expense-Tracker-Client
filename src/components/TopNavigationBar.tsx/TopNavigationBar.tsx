"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const TopNavigationBar = React.memo(() => {
  const router = useRouter();

  const handleLoginClick = React.useCallback(() => {
    router.push("/login");
  }, [router]);

  const handleSignupClick = React.useCallback(() => {
    router.push("/signup");
  }, [router]);

  return (
    <header className="sticky top-0 flex h-[60px] items-center justify-between border-b bg-zinc-100/40 px-6 dark:bg-zinc-800/40">
      <div className="text-md font-medium">{new Date().toDateString()}</div>
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
    </header>
  );
});

TopNavigationBar.displayName = "TopNavigationBar";
