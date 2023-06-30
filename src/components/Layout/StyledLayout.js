import { AppBar, Container, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled(Container)`
  padding: 0 20px;
`;

export const StyledApp = styled(AppBar)`
  justify-content: center;
  margin-bottom: 20px;
`;

export const StyledToolBar = styled(Toolbar)`
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  font-size: 20px;
  &.active {
    color: black;
    text-decoration: underline;
  }

  &:hover {
  }
`;
