import { StyledAuthContainer } from './StyledAuthMenu';
import { StyledNavLink } from 'components/Layout/StyledLayout';

const AuthMenu = () => {
  return (
    <StyledAuthContainer>
      <StyledNavLink to="/register">Registration</StyledNavLink>|
      <StyledNavLink to="/login">Login</StyledNavLink>
    </StyledAuthContainer>
  );
};

export default AuthMenu;
