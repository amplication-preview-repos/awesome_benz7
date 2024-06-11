import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserProfileUpdateManyWithoutPreferencesItemsInput } from "./UserProfileUpdateManyWithoutPreferencesItemsInput";

export type PreferencesUpdateInput = {
  ageRange?: "Option1" | null;
  community?: CommunityWhereUniqueInput | null;
  genderPreference?: "Option1" | null;
  otherPreferences?: InputJsonValue;
  userProfiles?: UserProfileUpdateManyWithoutPreferencesItemsInput;
};
