import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
const CategoryEdite = (props) => {
  return (
    <div>
      <Edit title="ajouter categorie ..." {...props}>
        <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="nom" />
        </SimpleForm>
      </Edit>
    </div>
  );
};

export default CategoryEdite;
