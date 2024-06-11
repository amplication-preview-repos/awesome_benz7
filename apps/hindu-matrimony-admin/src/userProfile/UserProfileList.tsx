import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMMUNITY_TITLE_FIELD } from "../community/CommunityTitle";
import { PREFERENCES_TITLE_FIELD } from "../preferences/PreferencesTitle";

export const UserProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserProfiles"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
