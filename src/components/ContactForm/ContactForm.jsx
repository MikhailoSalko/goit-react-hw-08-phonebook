import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectLoading,
} from '../../redux/contacts/contacts-selectors';
import { addContact } from '../../redux/contacts/contactsThunks';
import { StyledContactForm } from './ContactForm';
import { toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';

const initialState = {
  name: '',
  number: '',
};

function ContactForm() {
  const [state, setState] = useState({
    ...initialState,
  });
  const { name, number } = state;
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    addNewContact({ ...state });
    setState({
      ...initialState,
    });
  };

  const addNewContact = ({ name, number }) => {
    if (checkContactExist(name)) {
      return toast.error(`${name} is already in your contacts`);
    }
    toast.success(`You add contact ${name}`);
    dispatch(
      addContact({
        name,
        number,
      })
    );
  };

  const checkContactExist = name => {
    const normalizadName = name.toLowerCase().trim();
    const foundContact = contacts.find(
      ({ name }) => name.toLowerCase().trim() === normalizadName
    );
    return Boolean(foundContact);
  };

  return (
    <StyledContactForm onSubmit={handleSubmitForm} autoComplete="off">
      <TextField
        margin="dense"
        size="normal"
        onChange={handleInputChange}
        fullWidth
        required
        name="name"
        id="name"
        label="name"
        type="text"
        value={name}
        placeholder="Enter contact name"
        variant="filled"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adriafn, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
      <TextField
        margin="dense"
        size="normal"
        onChange={handleInputChange}
        fullWidth
        required
        value={number}
        name="number"
        id="number"
        label="number"
        type="tel"
        placeholder="Enter contact number"
        variant="filled"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      <Button type="submit" variant="contained" disabled={loading}>
        Add contact
      </Button>
    </StyledContactForm>
  );
}

export default ContactForm;
