import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsThunks.js';
import Loader from '../../components/Loader/Loader.jsx';
import {
  StyledHeader,
  StyledTextNoContacts,
} from '../../components/StyledApp.js';
import { Report } from 'notiflix';
import {
  StyledContactFormContainer,
  StyledContainer,
} from './StyledContactPage.js';

const ContactsPage = () => {
  const {
    contacts: { contacts, loading, error },
  } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledContainer>
      <StyledContactFormContainer>
        <StyledHeader>PhoneBook</StyledHeader>
        <ContactForm />
      </StyledContactFormContainer>
      <StyledContactFormContainer>
        <StyledHeader>Contacts</StyledHeader>
        <Filter />
        {error && Report.failure(error)}
        {loading && contacts.length === 0 ? (
          <Loader />
        ) : contacts.length === 0 && !error ? (
          <StyledTextNoContacts>
            There are no contacts in your phonebook
          </StyledTextNoContacts>
        ) : (
          <ContactList />
        )}
      </StyledContactFormContainer>
    </StyledContainer>
  );
};

export default ContactsPage;
