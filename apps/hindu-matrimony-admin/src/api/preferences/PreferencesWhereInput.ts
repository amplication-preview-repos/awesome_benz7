import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";

export type PreferencesWhereInput = {
  ageRange?: "Option1";
  community?: CommunityWhereUniqueInput;
  genderPreference?: "Option1";
  id?: StringFilter;
  otherPreferences?: JsonFilter;
  userProfiles?: UserProfileListRelationFilter;
};
