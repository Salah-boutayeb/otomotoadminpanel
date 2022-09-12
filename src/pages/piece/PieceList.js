import React from "react";
import {
  Datagrid,
  TextField,
  List,
  EditButton,
  DeleteButton,
} from "react-admin";
export const PieceList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="nom" />
        <TextField source="type" />
        <EditButton basepath="/fournisseurs" />
        <DeleteButton basepath="/fournisseurs" />
      </Datagrid>
    </List>
  );
};
