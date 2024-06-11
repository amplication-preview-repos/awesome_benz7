import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "matchedProfile";

export const MatchTitle = (record: TMatch): string => {
  return record.matchedProfile?.toString() || String(record.id);
};
