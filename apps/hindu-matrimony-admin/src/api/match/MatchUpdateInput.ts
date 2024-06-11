import { UserProfileWhereUniqueInput } from "../userProfile/UserProfileWhereUniqueInput";

export type MatchUpdateInput = {
  matchedAt?: Date | null;
  matchedProfile?: string | null;
  userProfile?: UserProfileWhereUniqueInput | null;
};
