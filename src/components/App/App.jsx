import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { selectContacts, selectLoading, selectError } from '../../redux/filters/selectors';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

const App = () => {
  const dispatch = useDispatch();
  
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contact Book</h1>
      
   
      <ContactForm />
    
      <SearchBox />
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
     
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
