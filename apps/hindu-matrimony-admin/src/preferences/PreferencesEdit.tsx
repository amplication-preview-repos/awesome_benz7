import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CommunityTitle } from "../community/CommunityTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";

export const PreferencesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="ageRange"
          label="AgeRange"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="community.id"
          reference="Community"
          label="Community"
        >
          <SelectInput optionText={CommunityTitle} />
        </ReferenceInput>
        <SelectInput
          source="genderPreference"
          label="GenderPreference"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <ReferenceArrayInput
          source="userProfiles"
          reference="UserProfile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserProfileTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
