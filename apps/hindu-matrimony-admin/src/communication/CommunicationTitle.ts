import { Communication as TCommunication } from "../api/communication/Communication";

export const COMMUNICATION_TITLE_FIELD = "receiverProfile";

export const CommunicationTitle = (record: TCommunication): string => {
  return record.receiverProfile?.toString() || String(record.id);
};
