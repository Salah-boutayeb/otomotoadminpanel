import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-simple-rest";
import { FournisseurList } from "./pages/fournisseur/FournisseurList";
import FournisseurCreate from "./pages/fournisseur/FournisseurCreate";
import FournisseurEdite from "./pages/fournisseur/FournisseurEdite";
import { CategoryList } from "./pages/category/CategoryList";
import CategoryCreate from "./pages/category/CategoryCreate";
import CategoryEdite from "./pages/category/CategoryEdite";
import { PieceList } from "./pages/piece/PieceList";
import PieceCreate from "./pages/piece/PieceCreate";
import PieceEdite from "./pages/piece/PieceEdite";
import { SelectProvider } from "./contextApi/SelectContext";

const dataProvider = jsonServerProvider("http://localhost:5555/api");

const App = () => (
  <SelectProvider>
    <Admin dataProvider={dataProvider}>
      <Resource
        name="fournisseurs"
        list={FournisseurList}
        create={FournisseurCreate}
        edit={FournisseurEdite}
      />
      <Resource
        name="categories"
        list={CategoryList}
        create={CategoryCreate}
        edit={CategoryEdite}
      />
      <Resource
        name="pieces"
        list={PieceList}
        create={PieceCreate}
        edit={PieceEdite}
      />
    </Admin>
  </SelectProvider>
);

export default App;
