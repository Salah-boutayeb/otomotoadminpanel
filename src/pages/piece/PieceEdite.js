import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
const PieceEdite = (props) => {
  return (
    <div>
      <Edit title="editer piece ..." {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="nom" />
          <TextInput source="type" />
        </SimpleForm>
      </Edit>
    </div>
  );
};

export default PieceEdite;
