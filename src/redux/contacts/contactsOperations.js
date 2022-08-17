import axios from 'axios';
// import * as actions from './contactsActions';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62fab1f63c4f110faa9e3a1c.mockapi.io/';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async () => {
    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/contacts', contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  }
);

// export const fetchContact = () => async dispatch => {
//   dispatch(actions.fetchContactRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(actions.fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(actions.fetchContactError(error));
//   }
// };

// export const addContact = contact => async dispatch => {
//   dispatch(actions.addContactRequest());

//   try {
//     const { data } = await axios.post('/contacts', contact);

//     dispatch(actions.addContactSuccess(data));
//   } catch (error) {
//     dispatch(actions.addContactError(error));
//   }
// };

// export const deleteContact = id => async dispatch => {
//   dispatch(actions.deleteContactRequest());

//   try {
//     await axios.delete(`/contacts/${id}`);
//     dispatch(actions.deleteContactSuccess(id));
//   } catch (error) {
//     dispatch(actions.deleteContactError(error));
//   }
// };
