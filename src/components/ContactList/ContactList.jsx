import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
} from 'redux/contacts/contacts-selectors';
import { StyledList } from './StyledContactList';

const ContactList = () => {
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {contacts.length === 0 && !error ? (
        <p>You don't hame contact with this name</p>
      ) : (
        <StyledList>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
        </StyledList>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

ContactList.defaultProps = {
  contacts: [],
};
