"use client";

import Link from "next/link";
import React from "react";
import { Label } from "@/common/components/ui/label";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";
import { login } from "@/common/api/fetcher";
import { useToast } from "@/common/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/common/lib/utils";

const emailRegex = new RegExp("/^[^s@]+@[^s@]+.[^s@]+$/");
const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$"
);

export const Login = React.memo(() => {
  const { toast } = useToast();
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const isPasswordValid = React.useMemo(() => {
    return passwordRegex.test(user.password);
  }, [user.password]);

  const isEmailValid = React.useMemo(() => {
    return emailRegex.test(user.email);
  }, [user.email]);

  const isFormValid = React.useMemo(() => {
    return (
      user.email.length > 0 &&
      user.password.length > 0 &&
      isPasswordValid &&
      isEmailValid
    );
  }, [isEmailValid, isPasswordValid, user.email.length, user.password.length]);

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    },
    []
  );

  const onSigninButtonClick = React.useCallback(async () => {
    try {
      await login(user);
      toast({
        duration: 3000,
        title: "Login Successful!",
      });
      router.push("/");
    } catch (e: any) {
      console.error(e);
      toast({
        variant: "destructive",
        duration: 3000,
        title: e.response.data.message,
      });
    }
  }, [router, toast, user]);

  return (
    <div className=" p-2 md:p-6 h-full flex items-center justify-center ">
      <div className="space-y-4 max-w-[520px] w-full">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            required
            type="password"
            onChange={handleInputChange}
          />
        </div>
        <Button
          className={cn(
            "w-full",
            !isFormValid &&
              "cursor-not-allowed bg-gray-300 hover:bg-gray-300 shadow-none"
          )}
          onClick={onSigninButtonClick}
        >
          Sign In
        </Button>
        {/* <div className="flex items-center justify-center mt-4 gap-2">
          <Button
            className="w-full bg-transparent text-black border border-black py-2 rounded-md flex items-center justify-center hover:text-white"
            type="button"
          >
            <GithubIcon />
            Github
          </Button>
          <Button
            className="w-full bg-transparent text-black border border-black py-2 rounded-md flex items-center justify-center hover:text-white"
            type="button"
          >
            <GoogleIcon />
            Google
          </Button>
        </div> */}
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
