import { SortOrder } from "../../util/SortOrder";

export type CommunicationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  receiverProfile?: SortOrder;
  senderProfile?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
};
