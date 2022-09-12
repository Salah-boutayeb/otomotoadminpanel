import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
const CategoryCreate = (props) => {
  return (
    <div>
      <Create title="ajouter categorie ..." {...props}>
        <SimpleForm>
          <TextInput source="nom" />
        </SimpleForm>
      </Create>
    </div>
  );
};

export default CategoryCreate;
