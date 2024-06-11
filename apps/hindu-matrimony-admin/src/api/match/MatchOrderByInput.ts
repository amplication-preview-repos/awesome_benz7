import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  matchedAt?: SortOrder;
  matchedProfile?: SortOrder;
  updatedAt?: SortOrder;
  userProfileId?: SortOrder;
};
