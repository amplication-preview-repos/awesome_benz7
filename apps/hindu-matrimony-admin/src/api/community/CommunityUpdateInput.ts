import { PreferencesUpdateManyWithoutCommunitiesInput } from "./PreferencesUpdateManyWithoutCommunitiesInput";
import { UserProfileUpdateManyWithoutCommunitiesInput } from "./UserProfileUpdateManyWithoutCommunitiesInput";

export type CommunityUpdateInput = {
  communityName?: string | null;
  preferencesItems?: PreferencesUpdateManyWithoutCommunitiesInput;
  userProfiles?: UserProfileUpdateManyWithoutCommunitiesInput;
};
