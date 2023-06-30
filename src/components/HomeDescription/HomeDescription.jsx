import {
  StyledDescription,
  StyledDescriptionContainer,
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
        convenience and security. This article explores the features and
        benefits of such a phonebook application, highlighting its ability to
        safeguard user data and provide a personalized contact management
        experience.
      </StyledDescription>
    </StyledDescriptionContainer>
  );
};

export default HomeDescription;
