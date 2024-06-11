import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USERPROFILE_TITLE_FIELD } from "./UserProfileTitle";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";
import { PREFERENCES_TITLE_FIELD } from "../preferences/PreferencesTitle";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Match"
          target="userProfileId"
          label="Matches"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="MatchedAt" source="matchedAt" />
            <TextField label="MatchedProfile" source="matchedProfile" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="UserProfile"
              source="userprofile.id"
              reference="UserProfile"
            >
              <TextField source={USERPROFILE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
