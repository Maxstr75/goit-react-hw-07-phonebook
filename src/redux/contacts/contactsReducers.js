import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as actions from './contactsActions';
// console.log(actions);

const items = createReducer([], {
  [actions.fetchContactSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => {
    return [...state, payload];
  },
  [actions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.handleFilter]: (_, { payload }) => payload,
});

const loading = createReducer([], {
  [actions.fetchContactRequest]: () => true,
  [actions.fetchContactSuccess]: () => false,
  [actions.fetchContactError]: () => false,

  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,

  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const contactReducers = combineReducers({
  items,
  filter,
  loading,
});

export { contactReducers };
