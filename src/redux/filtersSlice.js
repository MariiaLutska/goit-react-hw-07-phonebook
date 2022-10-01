import { createSlice } from '@reduxjs/toolkit';
import { filterContacts } from './constants';

const filtersInitialState = {
  status: filterContacts.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
