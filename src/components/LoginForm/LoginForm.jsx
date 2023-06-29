import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
      .then(() => navigate('/contacts'));
    e.target.reset();
  };

  return (
    <form onSubmit={handleLoginForm}>
      <TextField
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
      <Button type="submit" variant="outlined">
        Log In
      </Button>
    </form>
  );
};

export default LoginForm;
