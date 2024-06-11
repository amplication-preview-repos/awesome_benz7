import { Community } from "../community/Community";
import { JsonValue } from "type-fest";
import { UserProfile } from "../userProfile/UserProfile";

export type Preferences = {
  ageRange?: "Option1" | null;
  community?: Community | null;
  createdAt: Date;
  genderPreference?: "Option1" | null;
  id: string;
  otherPreferences: JsonValue;
  updatedAt: Date;
  userProfiles?: Array<UserProfile>;
};
