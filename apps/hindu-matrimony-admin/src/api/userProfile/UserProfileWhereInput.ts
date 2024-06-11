import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MatchListRelationFilter } from "../match/MatchListRelationFilter";
import { PreferencesWhereUniqueInput } from "../preferences/PreferencesWhereUniqueInput";

export type UserProfileWhereInput = {
  birthDate?: DateTimeNullableFilter;
  community?: CommunityWhereUniqueInput;
  fullName?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  matches?: MatchListRelationFilter;
  preferences?: PreferencesWhereUniqueInput;
  religion?: StringNullableFilter;
};
