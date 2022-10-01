import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';

import { Box } from '../Box';
import { useEffect } from 'react';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsSlice.contacts.items);
  const filterValue = useSelector(
    state => state.contactsSlice.contacts.filter.value
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getVisibleContacts = () => {
    const filterValueTolowerCase = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValueTolowerCase)
    );
  };

  let filtredContacts = getVisibleContacts();

  return (
    <Box color="secondary" as="ul">
      {filtredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} item={contact} />
      ))}
    </Box>
  );
};
