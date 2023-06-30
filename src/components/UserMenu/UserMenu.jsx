import { Typography } from '@mui/material';
import { StyledAuthContainer } from 'components/AuthMenu/StyledAuthMenu';
import { StyledNavLink } from 'components/Layout/StyledLayout';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserEmail } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/authThunks';
import { selectLoading } from 'redux/contacts/contacts-selectors';
import { StyledButton } from './StyledUserMenu';
import LogoutIcon from '@mui/icons-material/Logout';

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email } = useSelector(selectUserEmail);
  const loading = useSelector(selectLoading);

  return (
    <StyledAuthContainer>
      <StyledNavLink to="/contacts">Contacts</StyledNavLink>
      <Typography>{email}</Typography>
      <StyledButton
        type="submit"
        variant="outlined"
        disabled={loading}
        endIcon={<LogoutIcon />}
        onClick={() =>
          dispatch(logout())
            .unwrap()
            .then(() => navigate('/'))
        }
      >
        Log Out
      </StyledButton>
    </StyledAuthContainer>
  );
};

export default UserMenu;
