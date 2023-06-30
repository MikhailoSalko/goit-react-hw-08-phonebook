import { Typography, styled } from '@mui/material';
import { StyledContainer } from 'components/Layout/StyledLayout';
import { NavLink } from 'react-router-dom';

export const StyledDescriptionContainer = styled(StyledContainer)`
  padding: 0 20px;
`;

export const StyledDescription = styled(Typography)`
  margin-top: 30px;
  font-size: 20px;
`;

export const StyledNavigation = styled(NavLink)`
  color: blue;
  font-size: 20px;
  text-decoration: underline;
  font-weight: bold;
`;
