import { Preferences } from "../preferences/Preferences";
import { UserProfile } from "../userProfile/UserProfile";

export type Community = {
  communityName: string | null;
  createdAt: Date;
  id: string;
  preferencesItems?: Array<Preferences>;
  updatedAt: Date;
  userProfiles?: Array<UserProfile>;
};
