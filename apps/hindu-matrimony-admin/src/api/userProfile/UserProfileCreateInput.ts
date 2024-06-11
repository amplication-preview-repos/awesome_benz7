import { CommunityWhereUniqueInput } from "../community/CommunityWhereUniqueInput";
import { MatchCreateNestedManyWithoutUserProfilesInput } from "./MatchCreateNestedManyWithoutUserProfilesInput";
import { PreferencesWhereUniqueInput } from "../preferences/PreferencesWhereUniqueInput";

export type UserProfileCreateInput = {
  birthDate?: Date | null;
  community?: CommunityWhereUniqueInput | null;
  fullName?: string | null;
  gender?: "Option1" | null;
  matches?: MatchCreateNestedManyWithoutUserProfilesInput;
  preferences?: PreferencesWhereUniqueInput | null;
  religion?: string | null;
};
