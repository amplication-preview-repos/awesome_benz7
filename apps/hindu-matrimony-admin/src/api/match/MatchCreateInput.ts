import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type MatchCreateInput = {
  matchedAt?: Date | null;
  matchedProfile?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
