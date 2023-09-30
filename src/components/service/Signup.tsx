import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GithubIcon, GoogleIcon } from "@/icons";

export const Signup = React.memo(() => {
  return (
    <div className="p-6 flex items-center justify-center h-full w-full">
      <div className="space-y-4 max-w-[520px] w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password-validation">Password Validation</Label>
          <Input id="password-validation" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
        <div className="flex justify-center my-4">
          <div className="border-b w-1/4 self-center my-auto" />
          <span className="px-2 text-gray-500 text-sm uppercase">
            or continue with
          </span>
          <div className="border-b w-1/4 self-center" />
        </div>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <Button
            className="w-full bg-transparent text-black border border-black py-2 rounded-md flex items-center justify-center hover:text-white"
            type="button"
          >
            <GithubIcon />
            Sign Up with Github
          </Button>
          <Button
            className="w-full bg-transparent text-black border border-black py-2 rounded-md flex items-center justify-center hover:text-white"
            type="button"
          >
            <GoogleIcon />
            Sign Up with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Have an account?{" "}
          <Link className="hover:underline" href="/login">
            Login Here!
          </Link>
        </div>
      </div>
    </div>
  );
});

Signup.displayName = "Signup";
