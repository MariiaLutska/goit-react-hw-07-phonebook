// import { useState } from 'react';
// import { nanoid } from 'nanoid';
import {
  useSelector,
  useDispatch
} from 'react-redux';
// import { setContact } from '../../redux/contactsSlice';
import { Box } from '../Box';
import { ContactButton } from "../Button/Button";
import { selectContacts } from '../../redux/selectors';
import {addContact } from '../../redux/operations'


// let nameId = nanoid();
// let numbId = nanoid();

export const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const [id, setId] = useState('');
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // const handleInputChange = e => {
  //   const { name, value } = e.currentTarget;
  //   // setId(nanoid());

  //   if (name === 'name') {
  //     return setName(value);
  //   } else if (name === 'number') {
  //     return setNumber(value);
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // let data = { name, number};
    // let findName = contacts.find(
    //   item => item.name.toLowerCase() === data.name.toLowerCase()
    // );

    // if (findName) {
    //   return alert(`${data.name} is already in contact`);
    // } else {
    //   dispatch(addContact(data));
    // }
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    // dispatch(addContact(e.target.elements.text.value));
     if (contacts) {
            contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
            ? alert(name + ' is already in contacts')
         : dispatch(addContact({ name, phone }))
        }
    form.reset();

    // reset();
  };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  //   // setId('');
  // };

  return (
    <Box display="flex">
      <form onSubmit={handleSubmit}>
        <Box display="flex"
          flexDirection="column"
          as="label"
        htmlFor="name"
          >
            Name:
          <input
          // onInput={handleInputChange}
          // value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // id={nameId}
        />
          {/* <ErrorMessage name="name" component="div" /> */}
                
          <Box as="label"
            htmlFor="numb"
          >
            Number:
          </Box>
         <input
          // onInput={handleInputChange}
          // value={number}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // id={numbId}
        />
          {/* <ErrorMessage name="number" component="div" /> */}
                
          <ContactButton type="submit">
            Add contact
          </ContactButton>
        </Box>
      </form>
    </Box>
  );
};
