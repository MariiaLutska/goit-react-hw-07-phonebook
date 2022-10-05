import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { Box } from '../Box';
import { selectContacts, selectIsLoading } from '../../redux/selectors';
import { Circles } from 'react-loader-spinner';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Box color="secondary" as="ul">
      {isLoading && <Circles width={50} height={50} />}

      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} item={contact} />
      ))}
    </Box>
  );
};
