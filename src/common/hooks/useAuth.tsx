import React, { SetStateAction } from "react";
import { useLocalStorage } from "./useLocalStorage"; // Adjust the import path accordingly
import { useAtom } from "jotai";
import { UserAtomType, userAtom } from "../atoms/UserAtom";

export function useAuth() {
  const [user, setUser] = useAtom(userAtom);
  const [accessToken, setAccessToken] = useLocalStorage("accessToken", "");

  const isLoggedIn = React.useMemo(() => {
    return Boolean(user);
  }, [user]);

  const logOut = React.useCallback(() => {
    setAccessToken("");
    setUser(null);
  }, [setAccessToken, setUser]);

  React.useEffect(() => {
    if (accessToken) {
      // to implement auto login
      // fetch user data from access token;
    }
  }, [accessToken, setUser]);

  return { isLoggedIn, user, setUser, setAccessToken, logOut };
}
