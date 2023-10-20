"use client";

import React from "react";
import { Label } from "../../../common/components/ui/label";
import { Input } from "../../../common/components/ui/input";
import { Button } from "../../../common/components/ui/button";
import Link from "next/link";
import { User } from "@/common/entities/user.entity";
import { signup } from "@/common/api/fetcher";
import { cn } from "@/common/lib/utils";
import { useRouter } from "next/navigation";
import { useToast } from "@/common/components/ui/use-toast";

const emailRegex = new RegExp("/^[^s@]+@[^s@]+.[^s@]+$/");
const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$"
);

export const Signup = React.memo(() => {
  const router = useRouter();
  const { toast } = useToast();

  const [user, setUser] = React.useState<User & { passwordValidation: string }>(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordValidation: "",
    }
  );

  const isPasswordValid = React.useMemo(() => {
    return passwordRegex.test(user.password);
  }, [user.password]);

  const isEmailValid = React.useMemo(() => {
    return emailRegex.test(user.email);
  }, [user.email]);

  const isPasswordMatching = React.useMemo(() => {
    return user.password === user.passwordValidation;
  }, [user.password, user.passwordValidation]);

  const isFormValid = React.useMemo(() => {
    return (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password &&
      user.passwordValidation &&
      isEmailValid &&
      isPasswordMatching &&
      isPasswordValid
    );
  }, [
    isEmailValid,
    isPasswordMatching,
    isPasswordValid,
    user.email,
    user.firstName,
    user.lastName,
    user.password,
    user.passwordValidation,
  ]);

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

  const handleSignupButtonClick = React.useCallback(async () => {
    if (!isFormValid) return;
    try {
      await signup(user);
      toast({
        duration: 3000,
        title: "Signup successful!",
      });
      router.push("/login");
    } catch (e: any) {
      toast({
        variant: "destructive",
        duration: 3000,
        title: e.response.data.message,
      });
    }
  }, [isFormValid, router, toast, user]);

  return (
    <div className="p-2 md:p-6 flex items-center justify-center h-full w-full">
      <div className="space-y-4 max-w-[520px] w-full">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              name="firstName"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              id="last-name"
              name="lastName"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            required
            onChange={handleInputChange}
            type="email"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            {user.password.length > 0 && !isPasswordValid && (
              <p className="text-[10px] text-red-500">Password is too weak</p>
            )}
          </div>
          <Input
            className={cn(
              user.password.length > 0 &&
                !isPasswordValid &&
                "border border-red-500"
            )}
            id="password"
            name="password"
            required
            onChange={handleInputChange}
            type="password"
          />
        </div>
        <div className="space-y-2 relative">
          <div className="flex items-center justify-between">
            <Label htmlFor="password-validation">Password Validation</Label>
            {!isPasswordMatching && user.passwordValidation.length !== 0 && (
              <p className="text-[10px] text-red-500">
                Password does not match
              </p>
            )}
          </div>
          <Input
            className={cn(
              !isPasswordMatching &&
                user.passwordValidation.length !== 0 &&
                "border border-red-500"
            )}
            id="password-validation"
            name="passwordValidation"
            required
            onChange={handleInputChange}
            type="password"
          />
        </div>
        <Button
          className={cn(
            "w-full",
            !isFormValid &&
              "cursor-not-allowed bg-gray-300 hover:bg-gray-300 shadow-none"
          )}
          onClick={handleSignupButtonClick}
        >
          Sign Up
        </Button>
        {/* <div className="flex justify-center my-4">
          <div className="border-b w-[20%] self-center my-auto" />
          <span className="px-2 text-gray-500 text-sm uppercase">
            or continue with
          </span>
          <div className="border-b w-[20%] self-center" />
        </div>
        <div className="flex items-center justify-center mt-4 gap-2">
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
