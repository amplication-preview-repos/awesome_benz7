import { SortOrder } from "../../util/SortOrder";

export type CommunityOrderByInput = {
  communityName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
