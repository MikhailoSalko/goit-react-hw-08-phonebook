import {
  StyledDescription,
  StyledDescriptionContainer,
  StyledNavigation,
} from './StyledHomeDescription';
import { Typography } from '@mui/material';

const HomeDescription = () => {
  return (
    <StyledDescriptionContainer maxWidth="sm" component="div">
      <Typography variant="h2">PhoneBook App</Typography>
      <StyledDescription>
        In today's interconnected world, having a reliable and user-friendly
        phonebook application is essential for efficient contact management. A
        phonebook application that offers users the ability to create personal
        accounts and maintain private contact lists adds an extra layer of
        convenience and security. You can explores the features and benefits of
        such a phonebook application, just{' '}
        <StyledNavigation to="/register">try it now.</StyledNavigation>
      </StyledDescription>
    </StyledDescriptionContainer>
  );
};

export default HomeDescription;
