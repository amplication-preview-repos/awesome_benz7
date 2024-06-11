import { SortOrder } from "../../util/SortOrder";

export type PreferencesOrderByInput = {
  ageRange?: SortOrder;
  communityId?: SortOrder;
  createdAt?: SortOrder;
  genderPreference?: SortOrder;
  id?: SortOrder;
  otherPreferences?: SortOrder;
  updatedAt?: SortOrder;
};
