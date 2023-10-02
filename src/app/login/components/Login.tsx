import Link from "next/link";
import React from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { GithubIcon, GoogleIcon } from "@/icons";

export const Login = React.memo(() => {
  return (
    <div className="px-20 py-4 h-full flex items-center justify-center ">
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
          Log in
        </Button>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <Button
            className="w-full bg-transparent text-black border border-black py-2 rounded-md flex items-center justify-center hover:text-white"
            type="button"
          >
            <GithubIcon />
            Log in with Github
          </Button>
          <Button
            className="w-full bg-transparent text-black border border-black py-2 rounded-md flex items-center justify-center hover:text-white"
            type="button"
          >
            <GoogleIcon />
            Log in with Google
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