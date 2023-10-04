import Link from "next/link";
import React from "react";
import { Label } from "@/common/components/ui/label";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";
import { GithubIcon, GoogleIcon } from "@/common/icons";

export const Login = React.memo(() => {
  return (
    <div className="p-6 h-full flex items-center justify-center ">
      <div className="space-y-4 max-w-[520px] w-full">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Sign In
        </Button>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <Button
            className="w-full bg-transparent text-black border border-black py-2 rounded-md flex items-center justify-center hover:text-white"
            type="button"
          >
            <GithubIcon />
            Sign In with Github
          </Button>
          <Button
            className="w-full bg-transparent text-black border border-black py-2 rounded-md flex items-center justify-center hover:text-white"
            type="button"
          >
            <GoogleIcon />
            Sign In with Google
          </Button>
        </div>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <div className="text-sm">
            {"Don't Have An Account? "}
            <Link className="text-black hover:underline" href="/signup">
              Sign Up Here!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

Login.displayName = "Login";
