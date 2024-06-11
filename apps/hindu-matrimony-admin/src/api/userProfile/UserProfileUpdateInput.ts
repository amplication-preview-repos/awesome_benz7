import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { MatchUpdateManyWithoutUserProfilesInput } from "./MatchUpdateManyWithoutUserProfilesInput";
import { PreferencesWhereUniqueInput } from "../preferences/PreferencesWhereUniqueInput";

export type UserProfileUpdateInput = {
  birthDate?: Date | null;
  community?: CommunityWhereUniqueInput | null;
  fullName?: string | null;
  gender?: "Option1" | null;
  matches?: MatchUpdateManyWithoutUserProfilesInput;
  preferences?: PreferencesWhereUniqueInput | null;
  religion?: string | null;
};
