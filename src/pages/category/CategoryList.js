import React from "react";
import {
  Datagrid,
  TextField,
  List,
  EditButton,
  DeleteButton,
} from "react-admin";
export const CategoryList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="nom" />

        <EditButton basepath="/categories" />
        <DeleteButton basepath="/categories" />
      </Datagrid>
    </List>
  );
};
