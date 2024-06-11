import { PreferencesCreateNestedManyWithoutCommunitiesInput } from "./PreferencesCreateNestedManyWithoutCommunitiesInput";
import { UserProfileCreateNestedManyWithoutCommunitiesInput } from "./UserProfileCreateNestedManyWithoutCommunitiesInput";

export type CommunityCreateInput = {
  communityName?: string | null;
  preferencesItems?: PreferencesCreateNestedManyWithoutCommunitiesInput;
  userProfiles?: UserProfileCreateNestedManyWithoutCommunitiesInput;
};
