import { useDispatch } from "react-redux";
import {
  deleteContact,
  // toggleCompleted
} from "../../redux/operations";
// import { removeContact } from "../../redux/contactsSlice";
import { Box } from "../Box";
import { ContactButton } from "../Button/Button";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(deleteContact(contact.id));

  // const handleToggle = () => dispatch(toggleCompleted(contact));

  return (
    <Box color="primary" as="li">
      {/* <input type="value" onChange={handleToggle} /> */}
      {contact.name} : {contact.number}

      <ContactButton
        type="button"
        onClick={handleDelete}
      >
        Delete
      </ContactButton>
    </Box>
  );
};


