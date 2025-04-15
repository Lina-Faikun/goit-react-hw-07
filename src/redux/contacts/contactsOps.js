import axios from 'axios';


export const fetchContacts = () => async (dispatch) => {
  dispatch({ type: 'contacts/fetchAll/pending' });
  try {
    const response = await axios.get('https://67fe520b58f18d7209edb4a7.mockapi.io/api/v1/contacts');
    dispatch({ type: 'contacts/fetchAll/fulfilled', payload: response.data });
  } catch (error) {
    dispatch({ type: 'contacts/fetchAll/rejected', payload: error.message });
  }
};


export const addContact = (contact) => async (dispatch) => {
  dispatch({ type: 'contacts/addContact/pending' });
  try {
    const response = await axios.post('https://67fe520b58f18d7209edb4a7.mockapi.io/api/v1/contacts', contact);
    dispatch({ type: 'contacts/addContact/fulfilled', payload: response.data });
  } catch (error) {
    dispatch({ type: 'contacts/addContact/rejected', payload: error.message });
  }
};


export const deleteContact = (id) => async (dispatch) => {
  dispatch({ type: 'contacts/deleteContact/pending' });
  try {
    await axios.delete(`https://67fe520b58f18d7209edb4a7.mockapi.io/api/v1/contacts/${id}`);
    dispatch({ type: 'contacts/deleteContact/fulfilled', payload: id });
  } catch (error) {
    dispatch({ type: 'contacts/deleteContact/rejected', payload: error.message });
  }
};
