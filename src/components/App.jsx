import { useEffect } from "react";
import {
  useDispatch,
  useSelector
} from "react-redux";
// import { getContacts } from '../redux/selectors';
import { fetchContacts } from "../redux/operations";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Box } from "./Box";
import { Layout } from "./Layout/Layout";
import {
  selectError,
  selectIsLoading
} from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  // const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
     <Box
      display="flex"
       flexDirection="column"
       justifyContent="center"
       alignItems="center"
       border="normal"
       background="lightyellow"
      width="50%">
      {/* {isLoading && <p>Loading contacts... </p>} */}
      {/* {error && <p>{error}</p>} */}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
      <Layout>
 <h1>Phonebook</h1>
      <ContactForm />
     
      
      <h2>Contacts</h2>
      <Filter />
       
         {isLoading && !error && <b>Request in progress...</b>}
       <ContactList />
      </Layout>
       
   
    </Box>
  );
};
