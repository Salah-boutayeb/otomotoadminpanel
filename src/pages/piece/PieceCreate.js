import React, { useContext, useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  ImageInput,
  ImageField,
  useRedirect,
} from "react-admin";
import axios from "axios";
import SelectContext from "../../contextApi/SelectContext";
const PieceCreate = (props) => {
  const redirect = useRedirect();
  const { fournisseurs, categories } = useContext(SelectContext);
  const [image, setImage] = useState([]);
  const onFileChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files);
  };
  const send = (values) => {
    const formData = new FormData();
    const description = {};
    formData.append("VIN", values.VIN);
    formData.append("raference", values.reference);
    formData.append("categoryId", values.categoryId);
    formData.append("fournisseurId", values.fournisseurId);
    formData.append("typeVehicule", values.typeVehicule);
    formData.append("quantite", values.quantite);
    formData.append("nom", values.nom);
    formData.append("type", values.type);
    for (let index = 0; index < image.length; index++) {
      formData.append("imgs", image[index]);
    }

    values.description.forEach((element) => {
      description[element.title] = element.valeur;
    });

    console.log(description);
    formData.append("description", JSON.stringify(description));
    axios
      .post("http://localhost:5555/api/pieces/upload", formData, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        redirect("/pieces");
      });
  };

  return (
    <div>
      <Create title="ajouter piece ..." {...props}>
        <SimpleForm encType="multipart/form-data" onSubmit={send}>
          <TextInput source="VIN" />
          <TextInput source="reference" />

          <SelectInput
            label="category"
            source="categoryId"
            choices={categories}
            optionValue="id"
            optionText="nom"
          />
          <SelectInput
            label="fournisseur"
            source="fournisseurId"
            choices={fournisseurs}
            optionValue="id"
            optionText="nom"
          />
          <SelectInput
            label="type de vehicule"
            source="typeVehicule"
            choices={[
              { id: 2, value: "2 roues" },
              { id: 3, value: "3 roues" },
              { id: 4, value: "4 roues" },
            ]}
            optionValue="id"
            optionText="value"
          />
          <TextInput source="quantite" />

          <TextInput source="nom" />
          <TextInput source="type" />
          <ImageInput
            source="imgs"
            label="Related pictures"
            accept="image/*"
            onChange={onFileChange}
          >
            <ImageField source="src" title="title" />
          </ImageInput>
          <input type="file" multiple name="imgs" onChange={onFileChange} />
          <div>
            <ArrayInput source="description">
              <SimpleFormIterator>
                <TextInput source="title" />
                <TextInput source="valeur" />
              </SimpleFormIterator>
            </ArrayInput>
          </div>
        </SimpleForm>
      </Create>
    </div>
  );
};

export default PieceCreate;
