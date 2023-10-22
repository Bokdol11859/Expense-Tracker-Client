import React from "react";
import {
  DropdownMenu as DropdownMenu_,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogoutIcon, SettingIcon, UserIcon } from "@/common/icons";
import { useAuth } from "@/common/hooks/useAuth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

const Tabs = [
  {
    label: "Profile",
    value: "profile",
    icon: <UserIcon />,
    onClick: (router: AppRouterInstance) => {
      router.push("/profile");
    },
  },
  {
    label: "Setting",
    value: "setting",
    icon: <SettingIcon />,
    onClick: (router: AppRouterInstance) => {
      router.push("/setting");
    },
  },
];

export const DropdownMenu = React.memo(() => {
  const { user, logOut } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  return (
    <DropdownMenu_>
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
              {user?.firstName} {user?.lastName}
            </p>
            <p className="py-0 pl-0 text-xs text-gray-500">{user?.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        {Tabs.map((tab) => {
          return (
            <DropdownMenuItem
              key={tab.value}
              onClick={() => tab.onClick(router)}
              className="flex justify-start gap-2 items-center cursor-pointer p-2"
            >
              {tab.icon}
              {tab.label}
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            logOut();
            toast({
              title: "Logout Successful!",
            });
          }}
          className="flex justify-start gap-2 items-center cursor-pointer p-2"
        >
          <LogoutIcon />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu_>
  );
});

DropdownMenu.displayName = "DropdownMenu";
