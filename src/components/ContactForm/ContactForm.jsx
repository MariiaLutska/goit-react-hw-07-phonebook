import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { setContact } from '../../redux/contactsSlice';
import { Box } from '../Box';
import { ContactButton } from "../Button/Button";

let nameId = nanoid();
let numbId = nanoid();

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');
  const contacts = useSelector(state => state.contactsSlice.contacts.items);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setId(nanoid());

    if (name === 'name') {
      return setName(value);
    } else if (name === 'number') {
      return setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let data = { name, number, id };
    let findName = contacts.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );

    if (findName) {
      return alert(`${data.name} is already in contact`);
    } else {
      dispatch(setContact(data));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setId('');
  };

  return (
<Box display="flex">
      <form onSubmit={handleSubmit}>
        <Box display="flex"
          flexDirection="column" >
          <label
            htmlFor={nameId}
          >
            Name:
          </label>
          <input
          onInput={handleInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameId}
        />
          {/* <ErrorMessage name="name" component="div" /> */}
                
          <label
            htmlFor={numbId}
          >
            Number:
          </label>
         <input
          onInput={handleInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numbId}
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
