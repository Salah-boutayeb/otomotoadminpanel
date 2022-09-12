import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
const FournisseurCreate = (props) => {
  return (
    <div>
      <Create title="ajouter fournisseur ..." {...props}>
        <SimpleForm>
          <TextInput source="nom" />
          <TextInput source="type" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export default FournisseurCreate;
