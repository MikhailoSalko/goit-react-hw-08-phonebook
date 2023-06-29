import { Button } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserEmail } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/authThunks';

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email } = useSelector(selectUserEmail);
  console.log(email);
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <p>{email}</p>
      <Button
        type="submit"
        variant="outlined"
        onClick={() =>
          dispatch(logout())
            .unwrap()
            .then(() => navigate('/'))
        }
      >
        Log Out
      </Button>
    </div>
  );
};

export default UserMenu;