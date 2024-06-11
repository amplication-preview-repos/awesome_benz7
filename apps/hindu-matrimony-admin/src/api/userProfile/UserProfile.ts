import { Community } from "../community/Community";
import { Match } from "../match/Match";
import { Preferences } from "../preferences/Preferences";

export type UserProfile = {
  birthDate: Date | null;
  community?: Community | null;
  createdAt: Date;
  fullName: string | null;
  gender?: "Option1" | null;
  id: string;
  matches?: Array<Match>;
  preferences?: Preferences | null;
  religion: string | null;
  updatedAt: Date;
};
