import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import {Box} from "./Box";

export const App = () => {
  return (
     <Box
      display="flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
       border="normal"
       background="lightyellow"
     width="50%">
        <h1>Phonebook</h1>
      <ContactForm />
      
      
      <h2>Contacts</h2>
      <Filter />
        <ContactList />
   
    </Box>
  );
};
