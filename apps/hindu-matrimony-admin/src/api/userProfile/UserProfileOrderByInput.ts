import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  birthDate?: SortOrder;
  communityId?: SortOrder;
  createdAt?: SortOrder;
  fullName?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  preferencesId?: SortOrder;
  religion?: SortOrder;
  updatedAt?: SortOrder;
};
