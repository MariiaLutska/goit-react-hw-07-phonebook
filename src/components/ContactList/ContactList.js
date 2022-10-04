import { useSelector, useDispatch } from 'react-redux';
// import { Contact } from '../Contact/Contact';
// import { selectContacts, selectFilter } from '../../redux/selectors';
import { Box } from '../Box';
// import { useEffect } from 'react';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import { Oval } from 'react-loader-spinner';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // const visibleContacts = getVisibleContacts(contacts, filterValue);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  const getVisibleContacts = () => {
    const filterValueTolowerCase = filterValue.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValueTolowerCase)
      );
    }
  };

  let filtredContacts = getVisibleContacts();

  return (
    <Box color="secondary" as="ul">
      {error && <li>{error}</li>}
      {isLoading && <Oval width={30} height={30} />}
      {filtredContacts &&
        filtredContacts.map(({ phone, name, id }) => (
          <Box as="li" key={id}>
            <p>{`${name}:${phone}`}</p>
            <button onClick={() => dispatch(deleteContact(id))}>delete</button>
          </Box>
        ))}
    </Box>
  );
};
