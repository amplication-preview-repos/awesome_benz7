import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CommunityTitle } from "../community/CommunityTitle";
import { MatchTitle } from "../match/MatchTitle";
import { PreferencesTitle } from "../preferences/PreferencesTitle";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="BirthDate" source="birthDate" />
        <ReferenceInput
          source="community.id"
          reference="Community"
          label="Community"
        >
          <SelectInput optionText={CommunityTitle} />
        </ReferenceInput>
        <TextInput label="FullName" source="fullName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="matches"
          reference="Match"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MatchTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="preferences.id"
          reference="Preferences"
          label="Preferences"
        >
          <SelectInput optionText={PreferencesTitle} />
        </ReferenceInput>
        <TextInput label="Religion" source="religion" />
      </SimpleForm>
    </Edit>
  );
};
