import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommunicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Message" multiline source="message" />
        <TextInput label="ReceiverProfile" source="receiverProfile" />
        <TextInput label="SenderProfile" source="senderProfile" />
        <DateTimeInput label="SentAt" source="sentAt" />
      </SimpleForm>
    </Create>
  );
};
