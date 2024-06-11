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

export const PreferencesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PreferencesItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
