import { ArrayInput, SimpleFormIterator, TextInput } from "react-admin";

<ArrayInput source="backlinks">
  <SimpleFormIterator>
    <TextInput source="title" />
  </SimpleFormIterator>
</ArrayInput>;
