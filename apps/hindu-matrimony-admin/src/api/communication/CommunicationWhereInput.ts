import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommunicationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  receiverProfile?: StringNullableFilter;
  senderProfile?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
};
