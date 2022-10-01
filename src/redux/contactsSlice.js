import {
  createSlice,
  // nanoid
} from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    filter: {
      value: '',
    },
  },
};
// [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.contacts.filter.value = action.payload;
    },
    setContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    removeContact: (state, action) => {
      let indexId = state.contacts.items.findIndex(
        el => el.id === action.payload
      );

      if (indexId === -1) {
        return alert(`Item with ${action.id} not wound`);
      }

      state.contacts.items.splice(indexId, 1);
    },
  },
});

export const { setFilter, setContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
