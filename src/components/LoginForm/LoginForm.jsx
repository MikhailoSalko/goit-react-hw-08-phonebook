import { Button, TextField, Typography } from '@mui/material';
import {
  StyledForm,
  StyledInputContainer,
} from 'components/ContactForm/ContactForm';
import { StyledNavigation } from 'components/HomeDescription/StyledHomeDescription';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from 'redux/auth/authThunks';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = ({ target }) => {
    target.name === 'email'
      ? setEmail(target.value)
      : setPassword(target.value);
  };

  const handleLoginForm = e => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(data => {
        navigate('/contacts');
        toast.success(`Welcome, ${data.user.name}!`);
      });
    e.target.reset();
  };

  return (
    <>
      <Typography variant="h6">
        Please, enter your email and password to sign in. If you don't have an
        account, please{' '}
        <StyledNavigation to="/register">sign up.</StyledNavigation>
      </Typography>
      <StyledForm onSubmit={handleLoginForm}>
        <StyledInputContainer>
          <TextField
            margin="dense"
            size="normal"
            onChange={handleInputChange}
            fullWidth
            required
            name="email"
            id="email"
            label="email"
            type="email"
            placeholder="Please, enter your email"
            variant="filled"
          />
          <TextField
            margin="dense"
            size="normal"
            onChange={handleInputChange}
            fullWidth
            required
            name="password"
            id="password"
            label="password"
            type="password"
            placeholder="Please, enter your password"
            variant="filled"
          />
        </StyledInputContainer>
        <Button type="submit" variant="contained">
          Log In
        </Button>
      </StyledForm>
    </>
  );
};

export default LoginForm;
