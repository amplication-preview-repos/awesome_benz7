export type Communication = {
  createdAt: Date;
  id: string;
  message: string | null;
  receiverProfile: string | null;
  senderProfile: string | null;
  sentAt: Date | null;
  updatedAt: Date;
};
