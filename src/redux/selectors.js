// import { createSelector } from '@reduxjs/toolkit';
// import { filterValue } from './constants';

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filters.status;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filterValue) => {
//     // const contacts = selectContacts(state);
//     // const filterValue = selectFilter(state);

//     const filterValueTolowerCase = filterValue.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterValueTolowerCase)
//     );
//   }
// );

// export const selectVisibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filterValue = selectFilter(state);
//   const filterValueTolowerCase = filterValue.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterValueTolowerCase)
//   );
// };

// let filtredContacts = getVisibleContacts();
