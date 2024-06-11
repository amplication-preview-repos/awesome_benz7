import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommunicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Message" multiline source="message" />
        <TextInput label="ReceiverProfile" source="receiverProfile" />
        <TextInput label="SenderProfile" source="senderProfile" />
        <DateTimeInput label="SentAt" source="sentAt" />
      </SimpleForm>
    </Edit>
  );
};
