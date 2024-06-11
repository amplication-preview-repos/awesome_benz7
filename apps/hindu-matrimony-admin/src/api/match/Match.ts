import { UserProfile } from "../userProfile/UserProfile";

export type Match = {
  createdAt: Date;
  id: string;
  matchedAt: Date | null;
  matchedProfile: string | null;
  updatedAt: Date;
  userProfile?: UserProfile | null;
};
