import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
const FournisseurEdite = (props) => {
  return (
    <div>
      <Edit title="ajouter fournisseur ..." {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="nom" />
          <TextInput source="type" />
        </SimpleForm>
      </Edit>
    </div>
  );
};

export default FournisseurEdite;
