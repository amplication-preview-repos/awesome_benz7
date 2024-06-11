import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PreferencesTitle } from "../preferences/PreferencesTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const CommunityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CommunityName" source="communityName" />
        <ReferenceArrayInput
          source="preferencesItems"
          reference="Preferences"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PreferencesTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userProfiles"
          reference="UserProfile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserProfileTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
