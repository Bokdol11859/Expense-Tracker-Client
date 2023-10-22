import React from "react";
import { useLocalStorage } from "./useLocalStorage"; // Adjust the import path accordingly
import { User } from "../entities/user.entity";

export function useAuth(): {
  isLoggedIn: boolean;
  userInfo: Omit<User, "password"> | null;
  setUserInfo: (value: Omit<User, "password"> | null) => void;
  setAccessToken: (value: string) => void;
  logOut: () => void;
} {
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");
  const [userInfo, setUserInfo] = useLocalStorage<Omit<
    User,
    "password"
  > | null>("userInfo", null);

  const isLoggedIn = React.useMemo(() => {
    return Boolean(accessToken);
  }, [accessToken]);

  const logOut = React.useCallback(() => {
    setAccessToken("");
    setUserInfo(null);
  }, [setAccessToken, setUserInfo]);

  return { isLoggedIn, userInfo, setUserInfo, setAccessToken, logOut };
}
