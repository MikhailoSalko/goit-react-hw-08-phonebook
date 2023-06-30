import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsThunks';
import {
  StyledButton,
  StyledItem,
  StyledText,
  StyledTextWrapper,
} from './StyledContactItem';
import { selectLoading } from 'redux/contacts/contacts-selectors';

const ContactItem = ({ id, name, number }) => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const deleteContactFromList = () => dispatch(deleteContact(id));
  return (
    <StyledItem key={id}>
      <StyledTextWrapper>
        <StyledText>{name}:</StyledText>
        <StyledText>{number}</StyledText>
      </StyledTextWrapper>
      <StyledButton
        type="button"
        disabled={loading}
        onClick={deleteContactFromList}
      >
        Delete
      </StyledButton>
    </StyledItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
