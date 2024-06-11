import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "fullName";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.fullName?.toString() || String(record.id);
};
