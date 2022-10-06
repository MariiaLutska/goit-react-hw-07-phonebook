import { useDispatch } from "react-redux";
import {
  removeContact,
  // toggleCompleted
} from "../../redux/operations";
// import { removeContact } from "../../redux/contactsSlice";
import { Box } from "../Box";
import { ContactButton } from "../Button/Button";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(removeContact(contact.id));

  // const handleToggle = () => dispatch(toggleCompleted(contact));

  return (
    <Box color="primary" as="li" display="block" alignItems="center">
      {/* <label type="value" onChange={handleToggle} /> */}
      {contact.name} : {contact.phone}

      <ContactButton
        type="button"
        onClick={handleDelete}
      >
      Delete
     </ContactButton>
    </Box>
  );
};


