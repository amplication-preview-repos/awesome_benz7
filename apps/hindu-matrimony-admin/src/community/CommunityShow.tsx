import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMMUNITY_TITLE_FIELD } from "./CommunityTitle";
import { PREFERENCES_TITLE_FIELD } from "../preferences/PreferencesTitle";

export const CommunityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="CommunityName" source="communityName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Preferences"
          target="communityId"
          label="PreferencesItems"
        >
          <Datagrid rowClick="show">
            <TextField label="AgeRange" source="ageRange" />
            <ReferenceField
              label="Community"
              source="community.id"
              reference="Community"
            >
              <TextField source={COMMUNITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="GenderPreference" source="genderPreference" />
            <TextField label="ID" source="id" />
            <TextField label="OtherPreferences" source="otherPreferences" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserProfile"
          target="communityId"
          label="UserProfiles"
        >
          <Datagrid rowClick="show">
            <TextField label="BirthDate" source="birthDate" />
            <ReferenceField
              label="Community"
              source="community.id"
              reference="Community"
            >
              <TextField source={COMMUNITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="FullName" source="fullName" />
            <TextField label="Gender" source="gender" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Preferences"
              source="preferences.id"
              reference="Preferences"
            >
              <TextField source={PREFERENCES_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Religion" source="religion" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
