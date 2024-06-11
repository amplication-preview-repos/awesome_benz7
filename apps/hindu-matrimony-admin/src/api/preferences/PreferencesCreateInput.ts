import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { UserProfileCreateNestedManyWithoutPreferencesItemsInput } from "./UserProfileCreateNestedManyWithoutPreferencesItemsInput";

export type PreferencesCreateInput = {
  ageRange?: "Option1" | null;
  community?: CommunityWhereUniqueInput | null;
  genderPreference?: "Option1" | null;
  otherPreferences?: InputJsonValue;
  userProfiles?: UserProfileCreateNestedManyWithoutPreferencesItemsInput;
};
