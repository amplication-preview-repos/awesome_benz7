import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type MatchWhereInput = {
  id?: StringFilter;
  matchedAt?: DateTimeNullableFilter;
  matchedProfile?: StringNullableFilter;
  userProfile?: UserProfileWhereUniqueInput;
};
