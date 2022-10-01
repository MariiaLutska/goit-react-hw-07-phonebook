import { useDispatch } from "react-redux";

import { removeContact } from "../../redux/contactsSlice";
import { Box } from "../Box";
import { ContactButton } from "../Button/Button";


export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(removeContact(contact.id));

  return (
    <Box color="primary" as="li">
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


