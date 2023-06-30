import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunks';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  StyledForm,
  StyledInputContainer,
} from 'components/ContactForm/ContactForm';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = ({ target }) => {
    target.name === 'name'
      ? setName(target.value)
      : target.name === 'email'
      ? setEmail(target.value)
      : setPassword(target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }))
      .unwrap()
      .then(data => {
        navigate('/contacts');
        toast(`You registered as ${data.user.name}`);
      });
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <StyledInputContainer>
        <TextField
          margin="dense"
          size="small"
          onChange={handleInputChange}
          fullWidth
          required
          name="name"
          id="name"
          label="name"
          type="text"
          placeholder="Please, enter your name"
          variant="filled"
        />
        <TextField
          margin="dense"
          size="small"
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
          size="small"
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
        Register
      </Button>
    </StyledForm>
  );
};

export default RegisterForm;
