import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PreferencesListRelationFilter } from "../preferences/PreferencesListRelationFilter";
import { UserProfileListRelationFilter } from "../userProfile/UserProfileListRelationFilter";

export type CommunityWhereInput = {
  communityName?: StringNullableFilter;
  id?: StringFilter;
  preferencesItems?: PreferencesListRelationFilter;
  userProfiles?: UserProfileListRelationFilter;
};
