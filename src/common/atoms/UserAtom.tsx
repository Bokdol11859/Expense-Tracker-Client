import { atom } from "jotai";
import { User } from "../entities/user.entity";

export interface UserAtomType extends Omit<User, "password"> {
  accessToken: string;
}

export const userAtom = atom<UserAtomType | null>(null);
